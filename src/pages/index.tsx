import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { CloudDownload, LinkedIn, Email } from '@mui/icons-material';

import { api } from "../utils/api";
import ProfilePicture from "../../public/images/profile_picture.jpeg";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Andrea Torres Castro</title>
        <meta name="description" content="Nutricionista Andrea Torres Castro" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 pt-16">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            <span className="text-[hsl(280,100%,70%)]">A</span>ndrea <span className="text-[hsl(280,100%,70%)]">T</span>orres <span className="text-[hsl(280,100%,70%)]">C</span>astro
          </h1>
          <span className="flex space-x-10">
            <Link href="/docs/cv_andrea_torres_castro.pdf" target="_blank">
              <CloudDownload sx={{ fontSize: 50 }} color="secondary" />
            </Link>
            <Link href="https://www.linkedin.com/in/andrea-torres-33b547165/" target="_blank">
              <LinkedIn sx={{ fontSize: 50 }} color="secondary" />
            </Link>
            <Link href="mailto:andreapaztorres@gmail.com?subject=contacto%20pagina" target="_blank">
              <Email sx={{ fontSize: 50 }} color="secondary" />
            </Link>
          </span>
          <span className="container flex flex-row items-start justify-center gap-12 px-4">
            <span>
              <section className="flex max-w-md flex-col gap-4 rounded-xl p-4 text-white items-center">
                <Image
                  src={ProfilePicture}
                  alt="Profile Picture"
                  className="rounded-[12px]"
                  width={300}
                />
              </section>
              <section className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white items-center">
                <h3 className="text-2xl font-bold">Informaci??n Acad??mica</h3>
                <div className="text-md pl-4">
                  <ul className="list-disc">
                    <li><b>Ense??anza Superior:</b> Completa, Universidad Cat??lica Del Norte, Guayac??n, Coquimbo.</li>
                    <li><b>Ense??anza B??sica y Media:</b> Completa, Colegio Leonardo Da Vinci, Pe??uelas Coquimbo.</li>
                  </ul>
                </div>
              </section>
              <section className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white items-center mt-4">
                <h3 className="text-2xl font-bold">Cursos</h3>
                <div className="text-md">
                  <li>Certificado ???Iniciaci??n lactancia materna???. Curso de 10 horas, para ser facilitadora de grupos
                    de apoyo y consejera de lactancia, acompa??ando de forma personalizada a madres que necesitan
                    apoyo.</li>
                </div>
              </section>
            </span>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:gap-8">
              <section className="flex max-w-md flex-col gap-4 rounded-xl bg-white/10 p-4 text-white items-center">
                <h3 className="text-2xl font-bold">Experiencia laboral</h3>
                <div className="text-md pl-4">
                  <ul className="list-disc">
                    <li><b>Ago.2022 - Nov.2022:</b></li>
                    <p>
                      Internado APS CESFAM Juan Pablo Segundo.
                      Program??, gestion??, ejecut?? y evalu?? acciones de promoci??n y prevenci??n de salud,
                      integrando equipos de trabajo interdisciplinarios e intersectoriales. Adem??s, apliqu?? elementos de
                      salud en intervenciones a nivel individual, familiar y comunitario, a trav??s de todo el ciclo vital.
                    </p>
                    <li><b>Jun.2022 - Ago.2022:</b></li>
                    <p>
                      Internado Cl??nico Hospital San Pablo de Coquimbo, Servicio de
                      Pensionado y Medicina.
                      Program??, gestion??, ejecut?? y evalu?? acciones de recuperaci??n y rehabilitaci??n de la salud,
                      utilizando la alimentaci??n, nutrici??n y dietoterapia para responder a las necesidades presentadas
                      por la poblaci??n adulto y adulto mayor.
                    </p>
                    <li><b>Abr.2022 - Jun.2022:</b></li>
                    <p>
                      Internado Gesti??n rubro alimentario Concesionaria Eklipse,
                      Casino Rio Blanco.
                      Planifiqu??, ejecut??, supervis??, control?? y evalu?? planes de alimentaci??n en la unidad de
                      producci??n de alimentos, mediante la gesti??n de recursos financieros, materiales y capital humano,
                      asegurando la calidad higi??nico-sanitaria del proceso y producto alimentario.
                    </p>
                  </ul>
                </div>
              </section>
              <section className="flex max-w-md flex-col gap-4 rounded-xl bg-white/10 p-4 text-white items-center">
                <h3 className="text-2xl font-bold">Logros acad??micos</h3>
                <div className="text-md pl-4">
                  <li>Realizaci??n de charlas nutricionales para la actividad ???Seguimos conectados???, durante el a??o 2022.</li>
                  Iniciativa de la Universidad del Adulto Mayor (UAM UCN).
                  <li>Realizaci??n de clases para el ramo de autocuidado a alumnos de diferentes carreras de la
                    Universidad Cat??lica del Norte sede Coquimbo y Antofagasta, durante los a??os 2021 y 2022.</li>
                  <li>Voluntariado para el proceso de vacunaci??n y trazabilidad del Departamento de salud de La
                    Serena, durante el a??o 2021.</li>
                  <li>Tutor??as 2021: Realizaci??n de tutor??as a Estudiantes de Nutrici??n y Diet??tica de primer a??o para el
                    ramo de procesos biol??gicos.</li>
                  <li>Dirigente estudiantil 2016: Relacionadora p??blica del Centro de Estudiantes de Nutrici??n y Diet??tica (CENUT) Universidad Cat??lica del Norte.</li>
                </div>
              </section>
            </div>
          </span>
        </div>
      </main>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined },
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
