import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { track } from "@/lib/analytics";
import { submitEnrollment } from "@/lib/enrollment";
import { LEGACY_FORM_URL, firstClassLabel, program } from "@/config/program";

const COUNTRIES = ["Perú", "Argentina", "Bolivia", "Brasil", "Chile", "Colombia", "Ecuador", "México", "Otro"] as const;

const DIAL_CODES = [
  { code: "+51", label: "Perú +51" },
  { code: "+54", label: "Argentina +54" },
  { code: "+591", label: "Bolivia +591" },
  { code: "+55", label: "Brasil +55" },
  { code: "+56", label: "Chile +56" },
  { code: "+57", label: "Colombia +57" },
  { code: "+593", label: "Ecuador +593" },
  { code: "+52", label: "México +52" },
  { code: "+1", label: "EE. UU. / Canadá +1" },
  { code: "+34", label: "España +34" },
] as const;

const MOTIVES = [
  "Mejorar mis habilidades digitales",
  "Construir un proyecto propio",
  "Potenciar mi perfil profesional",
  "Conectar con una comunidad",
  "Dar el salto al mundo tech",
  "Otro",
] as const;

const SOURCES = [
  "Instagram de Inspira Tech",
  "LinkedIn de Inspira Tech",
  "Un amigo o conocido me lo recomendó",
  "Grupo de WhatsApp",
  "Google",
  "Charla o conferencia",
  "Otro",
] as const;

const MIN_AGE = program.minAge;

/** Edad cumplida hoy a partir de una fecha AAAA-MM-DD (NaN si la fecha no es válida). */
const ageFrom = (iso: string) => {
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return NaN;
  const today = new Date();
  let age = today.getFullYear() - y;
  if (today.getMonth() + 1 < m || (today.getMonth() + 1 === m && today.getDate() < d)) age -= 1;
  return age;
};

/** Fecha máxima que se puede elegir (hoy hace MIN_AGE años), en formato AAAA-MM-DD. */
const maxBirthDate = () => {
  const d = new Date();
  d.setFullYear(d.getFullYear() - MIN_AGE);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};

const schema = z.object({
  nombre: z.string().trim().min(2, "Escribe tu nombre").max(60),
  apellidos: z.string().trim().min(2, "Escribe tus apellidos").max(80),
  correo: z.string().trim().toLowerCase().email("Escribe un correo válido").max(120),
  codigoPais: z.string(),
  celular: z
    .string()
    .trim()
    .regex(/^[0-9 ]{6,15}$/, "Escribe solo números (sin el código de país)"),
  pais: z.string().min(1, "Elige tu país"),
  fechaNacimiento: z
    .string()
    .min(1, "Escribe tu fecha de nacimiento")
    .refine((v) => !Number.isNaN(ageFrom(v)) && ageFrom(v) <= 100, "Revisa tu fecha de nacimiento")
    .refine((v) => Number.isNaN(ageFrom(v)) || ageFrom(v) >= MIN_AGE, `El programa es para mayores de edad (${MIN_AGE} años o más)`),
  mayorEdad: z.literal(true, { errorMap: () => ({ message: "Debes confirmar que eres mayor de edad" }) }),
  motivos: z.array(z.string()).min(1, "Elige al menos una opción"),
  fuente: z.string().min(1, "Cuéntanos cómo nos conociste"),
  acepto: z.literal(true, { errorMap: () => ({ message: "Debes aceptar para continuar" }) }),
});

type FormValues = z.infer<typeof schema>;

const fieldClass = "h-11 bg-white";
const selectClass =
  "h-11 w-full rounded-md border border-input bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring";

const Inscripcion = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "unavailable" | "error">("idle");
  const started = useRef(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { codigoPais: "+51", pais: "", fuente: "", motivos: [] },
  });

  const selectedMotives = watch("motivos") ?? [];
  const toggleMotive = (motive: string) => {
    const next = selectedMotives.includes(motive)
      ? selectedMotives.filter((m) => m !== motive)
      : [...selectedMotives, motive];
    setValue("motivos", next, { shouldValidate: true, shouldDirty: true });
  };

  const onFirstFocus = () => {
    if (started.current) return;
    started.current = true;
    track("Form Started", { form: "inscripcion" });
  };

  const onInvalid = (formErrors: typeof errors) => {
    track("Form Error", { form: "inscripcion", fields: Object.keys(formErrors).join(",") });
  };

  const onSubmit = async (values: FormValues) => {
    setStatus("sending");
    // Solo datos no personales hacia Mixpanel.
    track("Form Submitted", { form: "inscripcion", country: values.pais, source: values.fuente });

    const result = await submitEnrollment({
      nombre: values.nombre,
      apellidos: values.apellidos,
      correo: values.correo,
      celular: `${values.codigoPais}${values.celular.replace(/\s/g, "")}`,
      pais: values.pais,
      fechaNacimiento: values.fechaNacimiento,
      motivos: values.motivos,
      fuente: values.fuente,
    });

    if ("checkoutUrl" in result) {
      track("Checkout Started", { form: "inscripcion" });
      window.location.assign(result.checkoutUrl);
      return;
    }
    setStatus(result.reason === "error" ? "error" : "unavailable");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="px-4 pb-16 pt-28">
        <div className="mx-auto max-w-xl">
          <h1 className="text-3xl font-bold text-inspira-darkBlue md:text-4xl">Reserva tu cupo</h1>
          <p className="mt-3 text-gray-600">
            Programa {program.name}. Empieza el {firstClassLabel().toLowerCase()}. Déjanos tus datos y en el siguiente
            paso podrás pagar tu inscripción.
          </p>

          {status === "unavailable" && (
            <div role="status" className="mt-6 rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
              Las inscripciones en línea todavía no están habilitadas. Por ahora puedes aplicar desde{" "}
              <a href={LEGACY_FORM_URL} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
                este formulario
              </a>
              .
            </div>
          )}
          {status === "error" && (
            <div role="alert" className="mt-6 rounded-lg border border-red-300 bg-red-50 p-4 text-sm text-red-900">
              No pudimos continuar. Inténtalo de nuevo en unos minutos o escríbenos a inspiratech.latam@gmail.com.
            </div>
          )}

          <form
            onSubmit={handleSubmit(onSubmit, onInvalid)}
            onFocusCapture={onFirstFocus}
            noValidate
            className="mt-8 space-y-5 rounded-2xl bg-white p-6 shadow-lg"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="nombre">Nombre</Label>
                <Input id="nombre" autoComplete="given-name" className={fieldClass} {...register("nombre")} />
                <p className="text-xs text-gray-500">Así aparecerá en tu certificado.</p>
                {errors.nombre && <p className="text-sm text-red-600">{errors.nombre.message}</p>}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="apellidos">Apellidos</Label>
                <Input id="apellidos" autoComplete="family-name" className={fieldClass} {...register("apellidos")} />
                {errors.apellidos && <p className="text-sm text-red-600">{errors.apellidos.message}</p>}
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="correo">Correo</Label>
              <Input
                id="correo"
                type="email"
                inputMode="email"
                autoComplete="email"
                className={fieldClass}
                {...register("correo")}
              />
              <p className="text-xs text-gray-500">Revísalo bien: aquí te llegará la confirmación y los siguientes pasos.</p>
              {errors.correo && <p className="text-sm text-red-600">{errors.correo.message}</p>}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="celular">Celular (WhatsApp)</Label>
              <div className="flex flex-col gap-2 sm:flex-row">
                <select aria-label="Código de país" className={`${selectClass} sm:w-44 sm:shrink-0`} {...register("codigoPais")}>
                  {DIAL_CODES.map((d) => (
                    <option key={d.code} value={d.code}>
                      {d.label}
                    </option>
                  ))}
                </select>
                <Input
                  id="celular"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel-national"
                  placeholder="987 654 321"
                  className={fieldClass}
                  {...register("celular")}
                />
              </div>
              <p className="text-xs text-gray-500">Te sumaremos a la comunidad de WhatsApp del programa.</p>
              {errors.celular && <p className="text-sm text-red-600">{errors.celular.message}</p>}
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="pais">País</Label>
                <select id="pais" className={selectClass} {...register("pais")}>
                  <option value="">Elige tu país</option>
                  {COUNTRIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                {errors.pais && <p className="text-sm text-red-600">{errors.pais.message}</p>}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="fechaNacimiento">Fecha de nacimiento</Label>
                <Input
                  id="fechaNacimiento"
                  type="date"
                  autoComplete="bday"
                  min="1920-01-01"
                  max={maxBirthDate()}
                  className={fieldClass}
                  {...register("fechaNacimiento")}
                />
                {errors.fechaNacimiento && <p className="text-sm text-red-600">{errors.fechaNacimiento.message}</p>}
              </div>
            </div>

            <fieldset className="space-y-2">
              <legend className="text-sm font-medium leading-none">¿Por qué te gustaría formar parte de Inspira Tech?</legend>
              <p className="text-xs text-gray-500">Puedes elegir más de una opción.</p>
              <div className="flex flex-wrap gap-2 pt-1">
                {MOTIVES.map((motive) => {
                  const active = selectedMotives.includes(motive);
                  return (
                    <button
                      key={motive}
                      type="button"
                      aria-pressed={active}
                      onClick={() => toggleMotive(motive)}
                      className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                        active
                          ? "border-inspira-purple bg-inspira-purple text-white"
                          : "border-gray-300 bg-white text-gray-700 hover:border-inspira-purple hover:text-inspira-purple"
                      }`}
                    >
                      {motive}
                    </button>
                  );
                })}
              </div>
              {errors.motivos && <p className="text-sm text-red-600">{errors.motivos.message}</p>}
            </fieldset>

            <div className="space-y-1.5">
              <Label htmlFor="fuente">¿Cómo nos conociste?</Label>
              <select id="fuente" className={selectClass} {...register("fuente")}>
                <option value="">Elige una opción</option>
                {SOURCES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              {errors.fuente && <p className="text-sm text-red-600">{errors.fuente.message}</p>}
            </div>

            <div>
              <label className="flex items-start gap-3 text-sm text-gray-700">
                <input type="checkbox" className="mt-1 h-4 w-4" {...register("mayorEdad")} />
                <span>Confirmo que soy mayor de edad ({MIN_AGE} años o más).</span>
              </label>
              {errors.mayorEdad && <p className="mt-1 text-sm text-red-600">{errors.mayorEdad.message}</p>}
            </div>

            <div>
              <label className="flex items-start gap-3 text-sm text-gray-700">
                <input type="checkbox" className="mt-1 h-4 w-4" {...register("acepto")} />
                <span>
                  Acepto los{" "}
                  <Link to="/terminos" target="_blank" className="font-medium text-inspira-blue underline">
                    términos y condiciones
                  </Link>{" "}
                  y la{" "}
                  <Link to="/privacidad" target="_blank" className="font-medium text-inspira-blue underline">
                    política de privacidad
                  </Link>
                  .
                </span>
              </label>
              {errors.acepto && <p className="mt-1 text-sm text-red-600">{errors.acepto.message}</p>}
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? "Enviando..." : "Continuar al pago"}
            </button>
            <p className="text-center text-xs text-gray-500">
              Early bird S/{program.earlyBird.price} con cupos limitados; luego S/
              {program.regular.price}.
            </p>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Inscripcion;
