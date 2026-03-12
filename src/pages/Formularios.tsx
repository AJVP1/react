import { DocsLayout } from "../layout/Docs.tsx";
import { Sidebar } from "../components/Sidebar.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";
import Codeblock from "../components/Codeblock.tsx";

const instalacionCode = `npm install react-hook-form`;

const useFormCode = `import { useForm } from "react-hook-form";

type LoginFormData = {
  email: string;
  password: string;
};

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="email"
        placeholder="Email"
        {...register("email", {
          required: "El email es obligatorio",
        })}
      />
      {errors.email && <p>{errors.email.message}</p>}

      <input
        type="password"
        placeholder="Contraseña"
        {...register("password", {
          required: "La contraseña es obligatoria",
          minLength: {
            value: 6,
            message: "Mínimo 6 caracteres",
          },
        })}
      />
      {errors.password && <p>{errors.password.message}</p>}

      <button type="submit">Entrar</button>
    </form>
  );
}`;

const registerCode = `import { useForm } from "react-hook-form";

function Formulario() {
  const { register } = useForm();

  return (
    <form>
      <input {...register("nombre")} placeholder="Nombre" />
      <input {...register("apellido")} placeholder="Apellido" />
    </form>
  );
}`;

const validacionesCode = `import { useForm } from "react-hook-form";

function Registro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <input
        {...register("email", {
          required: "El email es obligatorio",
          pattern: {
            value: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/,
            message: "Formato de email inválido",
          },
        })}
        placeholder="Email"
      />
      {errors.email && <p>{errors.email.message as string}</p>}

      <button type="submit">Enviar</button>
    </form>
  );
}`;

const controllerCode = `import { Controller, useForm } from "react-hook-form";

function Formulario() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      categoria: "",
    },
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <Controller
        name="categoria"
        control={control}
        render={({ field }) => (
          <select {...field}>
            <option value="">Selecciona una categoría</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
          </select>
        )}
      />

      <button type="submit">Guardar</button>
    </form>
  );
}`;

const formProviderCode = `import {
  FormProvider,
  useForm,
  useFormContext,
} from "react-hook-form";

function CampoNombre() {
  const { register } = useFormContext();

  return <input {...register("nombre")} placeholder="Nombre" />;
}

function Formulario() {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit((data) => console.log(data))}>
        <CampoNombre />
        <button type="submit">Enviar</button>
      </form>
    </FormProvider>
  );
}`;

const fieldArrayCode = `import { useForm, useFieldArray } from "react-hook-form";

function FormularioTelefonos() {
  const { control, register, handleSubmit } = useForm({
    defaultValues: {
      telefonos: [{ numero: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "telefonos",
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      {fields.map((field, index) => (
        <div key={field.id}>
          <input
            {...register(\`telefonos.\${index}.numero\`)}
            placeholder="Número"
          />
          <button type="button" onClick={() => remove(index)}>
            Eliminar
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={() => append({ numero: "" })}
      >
        Agregar teléfono
      </button>

      <button type="submit">Guardar</button>
    </form>
  );
}`;

const resetWatchCode = `import { useForm } from "react-hook-form";

function PerfilForm() {
  const { register, handleSubmit, reset, watch } = useForm({
    defaultValues: {
      nombre: "",
      ciudad: "",
    },
  });

  const nombre = watch("nombre");

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <input {...register("nombre")} placeholder="Nombre" />
      <input {...register("ciudad")} placeholder="Ciudad" />

      <p>Vista previa: {nombre}</p>

      <button type="submit">Guardar</button>
      <button
        type="button"
        onClick={() => reset({ nombre: "", ciudad: "" })}
      >
        Limpiar
      </button>
    </form>
  );
}`;

export const Formularios = () => {
  return (
    <DocsLayout
      sidebar={<Sidebar />}
      toc={<TableOfContents items={modulosData.sidebar[3].items[2].toc} />}
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-[#141414] mb-4">
        React Hook Form
      </h1>

      <p className="text-xl text-[#757575] leading-relaxed">
        React Hook Form es una librería para manejar formularios en React con un
        enfoque simple, buen rendimiento y una API basada en hooks. Su hook
        principal es <span className="font-semibold">useForm</span>, y también
        ofrece utilidades como <span className="font-semibold">Controller</span>
        , <span className="font-semibold">FormProvider</span> y{" "}
        <span className="font-semibold">useFieldArray</span>.
      </p>

      <h2
        id="que-es-react-hook-form"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        ¿Qué es React Hook Form?
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Esta librería permite registrar campos, validar datos, manejar envío de
        formularios y trabajar con estructuras complejas sin tener que escribir
        demasiada lógica manual. Además, la documentación oficial destaca que{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          useForm
        </code>{" "}
        es el hook central para administrar el formulario.
      </p>

      <Note title="Idea clave">
        React Hook Form busca simplificar la gestión de formularios usando{" "}
        <span className="font-semibold">hooks</span>, validaciones y utilidades
        reutilizables.
      </Note>

      <h2
        id="instalacion"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Instalación
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Para empezar, instala la librería en tu proyecto:
      </p>

      <Codeblock code={instalacionCode} title="Terminal" />

      <h2
        id="useform"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        useForm
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        <span className="font-semibold">useForm</span> es el hook principal.
        Proporciona utilidades como{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          register
        </code>
        ,{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          handleSubmit
        </code>{" "}
        y{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          formState
        </code>{" "}
        para controlar el formulario.
      </p>

      <Codeblock code={useFormCode} title="TSX" />

      <h2
        id="register"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Registrar inputs con register
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        La función{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          register
        </code>{" "}
        conecta los inputs con React Hook Form. Así la librería puede leer sus
        valores y aplicar validaciones.
      </p>

      <Codeblock code={registerCode} title="TSX" />

      <h2
        id="validaciones"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Validaciones
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Puedes definir reglas de validación directamente en{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          register
        </code>
        , como campos obligatorios, longitud mínima o patrones personalizados.
      </p>

      <Codeblock code={validacionesCode} title="TSX" />

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Menos boilerplate
          </h3>
          <p className="text-sm text-[#757575]">
            Gran parte de la validación se define junto al campo.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Errores claros
          </h3>
          <p className="text-sm text-[#757575]">
            Los mensajes se leen desde <code>formState.errors</code>.
          </p>
        </div>
      </div>

      <h2
        id="controller"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Controller
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        La documentación oficial indica que{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          Controller
        </code>{" "}
        es útil cuando trabajas con componentes controlados externos, como
        selects avanzados o librerías UI que no usan inputs nativos de forma
        directa.
      </p>

      <Codeblock code={controllerCode} title="TSX" />

      <h2
        id="formprovider"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        FormProvider y useFormContext
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        <span className="font-semibold">FormProvider</span> permite compartir
        los métodos del formulario por contexto, y{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          useFormContext
        </code>{" "}
        sirve para consumirlos en componentes anidados. Esto ayuda cuando el
        formulario está dividido en varias partes.
      </p>

      <Codeblock code={formProviderCode} title="TSX" />

      <h2
        id="usefieldarray"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        useFieldArray
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        <span className="font-semibold">useFieldArray</span> es el hook pensado
        para manejar campos dinámicos, por ejemplo listas de teléfonos,
        direcciones o productos.
      </p>

      <Codeblock code={fieldArrayCode} title="TSX" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Con este hook puedes agregar y eliminar bloques de campos sin tener que
        manejar toda la lógica manualmente.
      </p>

      <h2
        id="reset-watch"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        reset y watch
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        También puedes usar utilidades como{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          reset
        </code>{" "}
        para restaurar valores y{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          watch
        </code>{" "}
        para observar campos en tiempo real desde el formulario. Estas APIs
        forman parte de <span className="font-semibold">useForm</span>.
      </p>

      <Codeblock code={resetWatchCode} title="TSX" />

      <Note title="Buena práctica">
        Usa <span className="font-semibold">register</span> con inputs nativos,
        <span className="font-semibold"> Controller</span> con componentes
        controlados externos y{" "}
        <span className="font-semibold">FormProvider</span> cuando el formulario
        esté dividido en componentes profundos.
      </Note>
    </DocsLayout>
  );
};
