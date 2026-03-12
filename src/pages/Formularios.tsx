import { DocsLayout } from "../layout/Docs.tsx";
import { Sidebar } from "../components/Sidebar.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";
import Codeblock from "../components/Codeblock.tsx";

const instalacionCode = `npm install react-hook-form`;

const useFormCode = `<span class="keyword">import</span> { useForm } <span class="keyword">from</span> <span class="string">"react-hook-form"</span>;

<span class="keyword">type</span> LoginFormData = {
  email: string;
  password: string;
};

<span class="keyword">function</span> <span class="function">LoginForm</span>() {
  <span class="keyword">const</span> {
    register,
    handleSubmit,
    formState: { errors },
  } = <span class="function">useForm</span>&lt;LoginFormData&gt;();

  <span class="keyword">const</span> <span class="function">onSubmit</span> = (data: LoginFormData) => {
    console.<span class="function">log</span>(data);
  };

  <span class="keyword">return</span> (
    &lt;form onSubmit={handleSubmit(onSubmit)}&gt;
      &lt;input
        type=<span class="string">"email"</span>
        placeholder=<span class="string">"Email"</span>
        {...register(<span class="string">"email"</span>, {
          required: <span class="string">"El email es obligatorio"</span>,
        })}
      /&gt;
      {errors.email && &lt;p&gt;{errors.email.message}&lt;/p&gt;}

      &lt;input
        type=<span class="string">"password"</span>
        placeholder=<span class="string">"Contraseña"</span>
        {...register(<span class="string">"password"</span>, {
          required: <span class="string">"La contraseña es obligatoria"</span>,
          minLength: {
            value: <span class="number">6</span>,
            message: <span class="string">"Mínimo 6 caracteres"</span>,
          },
        })}
      /&gt;
      {errors.password && &lt;p&gt;{errors.password.message}&lt;/p&gt;}

      &lt;button type=<span class="string">"submit"</span>&gt;Entrar&lt;/button&gt;
    &lt;/form&gt;
  );
}`;

const registerCode = `<span class="keyword">import</span> { useForm } <span class="keyword">from</span> <span class="string">"react-hook-form"</span>;

<span class="keyword">function</span> <span class="function">Formulario</span>() {
  <span class="keyword">const</span> { register } = <span class="function">useForm</span>();

  <span class="keyword">return</span> (
    &lt;form&gt;
      &lt;input {...register(<span class="string">"nombre"</span>)} placeholder=<span class="string">"Nombre"</span> /&gt;
      &lt;input {...register(<span class="string">"apellido"</span>)} placeholder=<span class="string">"Apellido"</span> /&gt;
    &lt;/form&gt;
  );
}`;

const validacionesCode = `<span class="keyword">import</span> { useForm } <span class="keyword">from</span> <span class="string">"react-hook-form"</span>;

<span class="keyword">function</span> <span class="function">Registro</span>() {
  <span class="keyword">const</span> {
    register,
    handleSubmit,
    formState: { errors },
  } = <span class="function">useForm</span>();

  <span class="keyword">return</span> (
    &lt;form onSubmit={handleSubmit((data) => console.<span class="function">log</span>(data))}&gt;
      &lt;input
        {...register(<span class="string">"email"</span>, {
          required: <span class="string">"El email es obligatorio"</span>,
          pattern: {
            value: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/,
            message: <span class="string">"Formato de email inválido"</span>,
          },
        })}
        placeholder=<span class="string">"Email"</span>
      /&gt;
      {errors.email && &lt;p&gt;{errors.email.message <span class="keyword">as</span> string}&lt;/p&gt;}

      &lt;button type=<span class="string">"submit"</span>&gt;Enviar&lt;/button&gt;
    &lt;/form&gt;
  );
}`;

const controllerCode = `<span class="keyword">import</span> { Controller, useForm } <span class="keyword">from</span> <span class="string">"react-hook-form"</span>;

<span class="keyword">function</span> <span class="function">Formulario</span>() {
  <span class="keyword">const</span> { control, handleSubmit } = <span class="function">useForm</span>({
    defaultValues: {
      categoria: <span class="string">""</span>,
    },
  });

  <span class="keyword">return</span> (
    &lt;form onSubmit={handleSubmit((data) => console.<span class="function">log</span>(data))}&gt;
      &lt;Controller
        name=<span class="string">"categoria"</span>
        control={control}
        render={({ field }) => (
          &lt;select {...field}&gt;
            &lt;option value=<span class="string">""</span>&gt;Selecciona una categoría&lt;/option&gt;
            &lt;option value=<span class="string">"frontend"</span>&gt;Frontend&lt;/option&gt;
            &lt;option value=<span class="string">"backend"</span>&gt;Backend&lt;/option&gt;
          &lt;/select&gt;
        )}
      /&gt;

      &lt;button type=<span class="string">"submit"</span>&gt;Guardar&lt;/button&gt;
    &lt;/form&gt;
  );
}`;

const formProviderCode = `<span class="keyword">import</span> {
  FormProvider,
  useForm,
  useFormContext,
} <span class="keyword">from</span> <span class="string">"react-hook-form"</span>;

<span class="keyword">function</span> <span class="function">CampoNombre</span>() {
  <span class="keyword">const</span> { register } = <span class="function">useFormContext</span>();

  <span class="keyword">return</span> &lt;input {...register(<span class="string">"nombre"</span>)} placeholder=<span class="string">"Nombre"</span> /&gt;;
}

<span class="keyword">function</span> <span class="function">Formulario</span>() {
  <span class="keyword">const</span> methods = <span class="function">useForm</span>();

  <span class="keyword">return</span> (
    &lt;FormProvider {...methods}&gt;
      &lt;form onSubmit={methods.handleSubmit((data) => console.<span class="function">log</span>(data))}&gt;
        &lt;CampoNombre /&gt;
        &lt;button type=<span class="string">"submit"</span>&gt;Enviar&lt;/button&gt;
      &lt;/form&gt;
    &lt;/FormProvider&gt;
  );
}`;

const fieldArrayCode = `<span class="keyword">import</span> { useForm, useFieldArray } <span class="keyword">from</span> <span class="string">"react-hook-form"</span>;

<span class="keyword">function</span> <span class="function">FormularioTelefonos</span>() {
  <span class="keyword">const</span> { control, register, handleSubmit } = <span class="function">useForm</span>({
    defaultValues: {
      telefonos: [{ numero: <span class="string">""</span> }],
    },
  });

  <span class="keyword">const</span> { fields, append, remove } = <span class="function">useFieldArray</span>({
    control,
    name: <span class="string">"telefonos"</span>,
  });

  <span class="keyword">return</span> (
    &lt;form onSubmit={handleSubmit((data) => console.<span class="function">log</span>(data))}&gt;
      {fields.map((field, index) => (
        &lt;div key={field.id}&gt;
          &lt;input
            {...register(\`telefonos.\${index}.numero\`)}
            placeholder=<span class="string">"Número"</span>
          /&gt;
          &lt;button type=<span class="string">"button"</span> onClick={() => remove(index)}&gt;
            Eliminar
          &lt;/button&gt;
        &lt;/div&gt;
      ))}

      &lt;button
        type=<span class="string">"button"</span>
        onClick={() => append({ numero: <span class="string">""</span> })}
      &gt;
        Agregar teléfono
      &lt;/button&gt;

      &lt;button type=<span class="string">"submit"</span>&gt;Guardar&lt;/button&gt;
    &lt;/form&gt;
  );
}`;

const resetWatchCode = `<span class="keyword">import</span> { useForm } <span class="keyword">from</span> <span class="string">"react-hook-form"</span>;

<span class="keyword">function</span> <span class="function">PerfilForm</span>() {
  <span class="keyword">const</span> { register, handleSubmit, reset, watch } = <span class="function">useForm</span>({
    defaultValues: {
      nombre: <span class="string">""</span>,
      ciudad: <span class="string">""</span>,
    },
  });

  <span class="keyword">const</span> nombre = <span class="function">watch</span>(<span class="string">"nombre"</span>);

  <span class="keyword">return</span> (
    &lt;form onSubmit={handleSubmit((data) => console.<span class="function">log</span>(data))}&gt;
      &lt;input {...register(<span class="string">"nombre"</span>)} placeholder=<span class="string">"Nombre"</span> /&gt;
      &lt;input {...register(<span class="string">"ciudad"</span>)} placeholder=<span class="string">"Ciudad"</span> /&gt;

      &lt;p&gt;Vista previa: {nombre}&lt;/p&gt;

      &lt;button type=<span class="string">"submit"</span>&gt;Guardar&lt;/button&gt;
      &lt;button
        type=<span class="string">"button"</span>
        onClick={() => reset({ nombre: <span class="string">""</span>, ciudad: <span class="string">""</span> })}
      &gt;
        Limpiar
      &lt;/button&gt;
    &lt;/form&gt;
  );
}`;

export const Formularios = () => {
  return (
    <DocsLayout
      sidebar={<Sidebar />}
      toc={<TableOfContents items={modulosData.sidebar[3].items[1].toc} />}
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
