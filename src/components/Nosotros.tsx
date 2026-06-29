import { useReveal } from "../hooks/useReveal";
import nosotrosEquipo from "../assets/img/nosotros-equipo.png";
import entorno1 from "../assets/img/entorno_1.png";
import entorno2 from "../assets/img/entorno_2.png";
import entorno3 from "../assets/img/entorno_3.png";
import imgLesli from "../assets/organigrama_img/Lesli.jpeg";
import imgNancy from "../assets/organigrama_img/nancy.jpeg";
import imgAmayrani from "../assets/organigrama_img/Amayrani.jpeg";
import imgAracely from "../assets/organigrama_img/aracely.jpeg";
import imgRogelio from "../assets/organigrama_img/Rogelio.jpeg";
import imgPnj1 from "../assets/organigrama_img/pnj_1.jpeg";
import imgPnj2 from "../assets/organigrama_img/pnj_2.jpeg";

const PLANT_PATHS = [
  "M86 206 C 84 160 88 120 90 80 C 91 56 92 34 92 14",
  "M89 158 C 64 154 51 138 53 121 C 73 127 86 141 89 158 Z",
  "M91 138 C 116 134 129 118 127 101 C 107 107 94 121 91 138 Z",
  "M90 116 C 68 113 57 99 59 83 C 77 89 88 100 90 116 Z",
  "M92 94 C 113 91 123 77 121 61 C 103 67 95 78 92 94 Z",
  "M91 70 C 74 68 65 56 67 43 C 81 48 90 59 91 70 Z",
  "M93 48 C 108 46 116 36 114 24 C 100 29 94 38 93 48 Z",
  "M92 22 C 87 19 87 11 92 8 C 97 11 97 19 92 22 Z",
];

const entornos = [entorno1, entorno2, entorno3];

function PlantSVG({
  style,
  stroke = "#7A8C6E",
}: {
  style?: React.CSSProperties;
  stroke?: string;
}) {
  return (
    <svg
      viewBox="0 0 160 210"
      fill="none"
      stroke={stroke}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={style}
    >
      {PLANT_PATHS.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  );
}

function OrgCircleBig({ src, alt = "" }: { src: string; alt?: string }) {
  return (
    <div
      style={{
        width: 96,
        height: 96,
        borderRadius: "50%",
        overflow: "hidden",
        boxShadow:
          "0 0 0 6px #F5F0E8, 0 0 0 7px #C8C0B4, 0 0 0 11px #F5F0E8, 0 0 0 12px #b8aa92",
        flexShrink: 0,
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
    </div>
  );
}

function OrgCircleSmall({ src, alt = "" }: { src: string; alt?: string }) {
  return (
    <div
      style={{
        width: 84,
        height: 84,
        borderRadius: "50%",
        overflow: "hidden",
        boxShadow: "0 0 0 5px #F5F0E8, 0 0 0 6px #C8C0B4",
        flexShrink: 0,
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
    </div>
  );
}

function OrgDept({ label }: { label: string }) {
  return (
    <div
      style={{
        border: "1px solid #C8C0B4",
        background: "#F5F0E8",
        padding: "12px 18px",
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: ".07em",
        textTransform: "uppercase",
        textAlign: "center",
        lineHeight: 1.4,
        maxWidth: 230,
      }}
    >
      {label}
    </div>
  );
}

function OrgLine({ h = 34 }: { h?: number }) {
  return <div style={{ width: 1, height: h, background: "#C8C0B4" }} />;
}

function OrgPerson({ name, roleLines }: { name: string; roleLines: string }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          fontSize: 10.5,
          fontWeight: 600,
          letterSpacing: ".07em",
          textTransform: "uppercase",
          lineHeight: 1.4,
        }}
        dangerouslySetInnerHTML={{ __html: roleLines }}
      />
      <div
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: "italic",
          fontSize: 17,
          marginTop: 3,
        }}
      >
        {name}
      </div>
    </div>
  );
}

const valores = [
  {
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#7A8C6E"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 6c-1.7-1.1-4.3-1.6-6.5-1.6v13c2.2 0 4.8.5 6.5 1.6 1.7-1.1 4.3-1.6 6.5-1.6v-13C16.3 4.4 13.7 4.9 12 6z" />
        <path d="M12 6v13" />
      </svg>
    ),
    titulo: "Compromiso educativo",
    desc: "Fortalecemos el talento humano con dedicación y enfoque en la calidad.",
  },
  {
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#7A8C6E"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3l7.5 3v5.5c0 4.3-3.2 7.5-7.5 8.5-4.3-1-7.5-4.2-7.5-8.5V6z" />
      </svg>
    ),
    titulo: "Responsabilidad",
    desc: "Actuamos con profesionalismo en cada proceso que acompañamos.",
  },
  {
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#7A8C6E"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 4v16" />
        <path d="M5.5 8h13" />
        <path d="M5.5 8L3 13.5a2.5 2.5 0 0 0 5 0z" />
        <path d="M18.5 8L16 13.5a2.5 2.5 0 0 0 5 0z" />
        <path d="M8 20.5h8" />
      </svg>
    ),
    titulo: "Ética profesional",
    desc: "Decisiones justas, transparentes y centradas en el bienestar de las personas.",
  },
  {
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#7A8C6E"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9.5 18h5" />
        <path d="M10 21h4" />
        <path d="M12 3a6 6 0 0 0-3.8 10.7c.7.6 1.1 1.4 1.2 2.3h5.2c.1-.9.5-1.7 1.2-2.3A6 6 0 0 0 12 3z" />
      </svg>
    ),
    titulo: "Innovación",
    desc: "Estrategias y herramientas actualizadas para el contexto organizacional actual.",
  },
  {
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#7A8C6E"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 20c0-3.3 2.5-5.5 5.5-5.5s5.5 2.2 5.5 5.5" />
        <path d="M16 5.5a3 3 0 0 1 0 6" />
        <path d="M17.5 14.2c2 .6 3.4 2.2 3.4 4.8" />
      </svg>
    ),
    titulo: "Trabajo colaborativo",
    desc: "Fomentamos la cooperación para alcanzar objetivos comunes.",
  },
  {
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#7A8C6E"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 20s-7-4.4-7-9.6A3.9 3.9 0 0 1 12 6.8 3.9 3.9 0 0 1 19 10.4C19 15.6 12 20 12 20z" />
      </svg>
    ),
    titulo: "Respeto",
    desc: "Valoramos la diversidad de ideas, experiencias y contextos.",
  },
  {
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#7A8C6E"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3l2.6 5.6 6.1.8-4.5 4.2 1.2 6.1L12 16.9 6.6 19.7l1.2-6.1-4.5-4.2 6.1-.8z" />
      </svg>
    ),
    titulo: "Excelencia",
    desc: "Mejora continua en nuestros servicios para generar resultados de alto impacto.",
  },
  {
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#7A8C6E"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.5 11.5a8 8 0 0 1-11.6 7.1L4 20l1.4-4.9A8 8 0 1 1 20.5 11.5z" />
      </svg>
    ),
    titulo: "Empatía",
    desc: "Escuchamos y comprendemos para brindar soluciones pertinentes.",
  },
  {
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#7A8C6E"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M17 7h4v4" />
      </svg>
    ),
    titulo: "Desarrollo humano",
    desc: "Impulsamos el crecimiento profesional y personal de cada colaborador.",
  },
];

export function Nosotros() {
  const r1 = useReveal();
  const r2 = useReveal();
  const r3 = useReveal();
  const r4 = useReveal();
  const r5 = useReveal();
  const r6 = useReveal();
  const r7 = useReveal();

  const rs: React.CSSProperties = {
    opacity: 0,
    transform: "translateY(24px)",
    transition:
      "opacity .8s ease, transform .8s cubic-bezier(0.25,0.46,0.45,0.94)",
  };

  return (
    <section
      id="nosotros"
      style={{
        scrollMarginTop: 70,
        background: "#EDE8DF",
        borderTop: "1px solid #C8C0B4",
        borderBottom: "1px solid #C8C0B4",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <PlantSVG
        style={{
          position: "absolute",
          top: -40,
          right: -30,
          width: 340,
          opacity: 0.06,
          transform: "rotate(22deg)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "clamp(64px,8vw,96px) clamp(20px,5vw,48px)",
          position: "relative",
        }}
      >
        {/* Intro */}
        <div
          ref={r1}
          style={{
            display: "flex",
            gap: "clamp(32px,5vw,64px)",
            alignItems: "center",
            flexWrap: "wrap",
            ...rs,
          }}
        >
          <div style={{ flex: "1 1 440px", minWidth: 300 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                marginBottom: 22,
              }}
            >
              <span style={{ width: 40, height: 1, background: "#7A8C6E" }} />
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: ".2em",
                  textTransform: "uppercase",
                  color: "#7A8C6E",
                }}
              >
                Quiénes somos
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
                fontSize: "clamp(34px,4.6vw,54px)",
                lineHeight: 1.08,
                letterSpacing: "-0.01em",
                margin: "0 0 24px",
              }}
            >
              Creemos que el talento humano es el activo más valioso de toda
              organización.
            </h2>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.7,
                color: "#4a463f",
                margin: 0,
              }}
            >
              En LARAN diseñamos soluciones estratégicas personalizadas para
              fortalecer a las empresas desde adentro — con análisis,
              metodología y compromiso real.
            </p>
          </div>
          <div style={{ flex: "0 1 360px", minWidth: 260 }}>
            <div
              style={{
                position: "relative",
                aspectRatio: "4/5",
                border: "1px solid #7A8C6E",
                padding: 14,
                overflow: "hidden",
              }}
            >
              <img
                src={nosotrosEquipo}
                alt="Equipo LARAN"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>

        {/* Galería entorno */}
        <div ref={r2} style={{ marginTop: "clamp(44px,5vw,60px)", ...rs }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginBottom: 18,
            }}
          >
            <span style={{ width: 28, height: 1, background: "#7A8C6E" }} />
            <span
              style={{
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: ".18em",
                textTransform: "uppercase",
                color: "#7A8C6E",
              }}
            >
              Nuestro entorno
            </span>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: 16,
            }}
          >
            {entornos.map((img, i) => (
              <div
                key={i}
                style={{
                  position: "relative",
                  aspectRatio: "3/2",
                  border: "1px solid #7A8C6E",
                  padding: 10,
                  overflow: "hidden",
                }}
              >
                <img
                  src={img}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Misión / Visión */}
        <div
          ref={r3}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: 16,
            marginTop: "clamp(48px,6vw,72px)",
            ...rs,
          }}
        >
          <div
            style={{
              background: "#F5F0E8",
              border: "1px solid #C8C0B4",
              padding: "clamp(34px,4vw,52px)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <PlantSVG
              style={{
                position: "absolute",
                bottom: -56,
                right: -34,
                width: 210,
                opacity: 0.07,
                transform: "rotate(168deg)",
                pointerEvents: "none",
              }}
            />
            <div style={{ position: "relative" }}>
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  background: "rgba(122,140,110,.13)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 22,
                }}
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#7A8C6E"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="12" cy="12" r="1.4" fill="#7A8C6E" />
                </svg>
              </div>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: ".22em",
                  textTransform: "uppercase",
                  color: "#7A8C6E",
                  marginBottom: 14,
                }}
              >
                Misión
              </div>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(20px,2vw,25px)",
                  fontWeight: 400,
                  lineHeight: 1.5,
                  color: "#1C1C1C",
                  margin: 0,
                }}
              >
                Brindar servicios de consultoría organizacional que impulsen el
                crecimiento y fortalecimiento de las empresas mediante el
                análisis, diseño y optimización de sus procesos, contribuyendo a
                una gestión eficiente, innovadora y orientada al logro de
                resultados.
              </p>
            </div>
          </div>
          <div
            style={{
              background: "#7A8C6E",
              padding: "clamp(34px,4vw,52px)",
              position: "relative",
              overflow: "hidden",
              color: "#F5F0E8",
            }}
          >
            <PlantSVG
              stroke="#F5F0E8"
              style={{
                position: "absolute",
                bottom: -56,
                right: -34,
                width: 210,
                opacity: 0.18,
                transform: "rotate(168deg)",
                pointerEvents: "none",
              }}
            />
            <div style={{ position: "relative" }}>
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  background: "rgba(245,240,232,.18)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 22,
                }}
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#F5F0E8"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 12s3.8-7 10-7 10 7 10 7-3.8 7-10 7-10-7-10-7z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: ".22em",
                  textTransform: "uppercase",
                  color: "#dfe5d6",
                  marginBottom: 14,
                }}
              >
                Visión
              </div>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(20px,2vw,25px)",
                  fontWeight: 400,
                  lineHeight: 1.5,
                  color: "#F5F0E8",
                  margin: 0,
                }}
              >
                Ser una consultoría reconocida por generar soluciones
                estratégicas que transformen organizaciones, fomentando la
                innovación, la mejora continua y el desarrollo sostenible para
                alcanzar altos niveles de desempeño y competitividad.
              </p>
            </div>
          </div>
        </div>

        {/* Valores header */}
        <div
          ref={r4}
          style={{ marginTop: "clamp(56px,7vw,88px)", marginBottom: 28, ...rs }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
                fontSize: "clamp(28px,3.2vw,38px)",
                margin: 0,
              }}
            >
              Nuestros valores
            </h3>
            <span
              style={{ fontSize: 13, color: "#8a8275", letterSpacing: ".02em" }}
            >
              Lo que guía cada decisión que tomamos
            </span>
          </div>
        </div>

        {/* Valores grid */}
        <div
          ref={r5}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: 1,
            background: "#C8C0B4",
            border: "1px solid #C8C0B4",
            ...rs,
          }}
        >
          {valores.map((v, i) => (
            <div
              key={i}
              style={{ background: "#F5F0E8", padding: "34px 30px" }}
            >
              {v.icon}
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 23,
                  fontWeight: 600,
                  margin: "18px 0 8px",
                }}
              >
                {v.titulo}
              </div>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.65,
                  color: "#6a6358",
                  margin: 0,
                }}
              >
                {v.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Equipo header */}
        <div ref={r6} style={{ marginTop: "clamp(56px,7vw,88px)", ...rs }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 16,
              flexWrap: "wrap",
              marginBottom: 8,
            }}
          >
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
                fontSize: "clamp(28px,3.2vw,38px)",
                margin: 0,
              }}
            >
              Nuestro equipo
            </h3>
            <span
              style={{ fontSize: 13, color: "#8a8275", letterSpacing: ".02em" }}
            >
              Estructura organizacional
            </span>
          </div>
        </div>

        {/* Organigrama */}
        <div
          ref={r7}
          style={{ overflowX: "auto", padding: "8px 4px 16px", ...rs }}
        >
          <div
            style={{
              minWidth: 880,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* L0 */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
                textAlign: "center",
                width: 200,
              }}
            >
              <OrgCircleBig src={imgLesli} alt="Lesli Hernández" />
              <div>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: ".08em",
                    textTransform: "uppercase",
                  }}
                >
                  Directora General
                </div>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontSize: 19,
                    marginTop: 2,
                  }}
                >
                  Lesli Hernández
                </div>
              </div>
            </div>

            <OrgLine h={34} />

            {/* L1 */}
            <div style={{ position: "relative", width: "100%" }}>
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "16.66%",
                  right: "16.66%",
                  height: 1,
                  background: "#C8C0B4",
                }}
              />
              <div style={{ display: "flex", alignItems: "flex-start" }}>
                {/* COL 1: Reclutamiento */}
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "0 8px",
                  }}
                >
                  <OrgLine h={32} />
                  <OrgDept label="Reclutamiento y Selección" />
                  <OrgLine h={30} />
                  <div style={{ position: "relative", width: "100%" }}>
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: "25%",
                        right: "25%",
                        height: 1,
                        background: "#C8C0B4",
                      }}
                    />
                    <div style={{ display: "flex", alignItems: "flex-start" }}>
                      <div
                        style={{
                          flex: 1,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: 12,
                          padding: "0 6px",
                        }}
                      >
                        <OrgLine h={28} />
                        <OrgCircleSmall src={imgNancy} alt="Nancy Montejo" />
                        <OrgPerson
                          roleLines="Coordinador de<br>Reclutamiento"
                          name="Nancy Montejo"
                        />
                      </div>
                      <div
                        style={{
                          flex: 1,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: 12,
                          padding: "0 6px",
                        }}
                      >
                        <OrgLine h={28} />
                        <OrgCircleSmall src={imgPnj1} alt="Arturo López" />
                        <OrgPerson
                          roleLines="Analista de Selección<br>de Personal"
                          name="Arturo López"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* COL 2: Marketing */}
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 12,
                    padding: "0 8px",
                  }}
                >
                  <OrgLine h={32} />
                  <OrgCircleSmall src={imgRogelio} alt="Rogelio Capeline" />
                  <OrgPerson
                    roleLines="Coordinador de<br>Marketing"
                    name="Rogelio Capeline"
                  />
                </div>

                {/* COL 3: Capacitación */}
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "0 8px",
                  }}
                >
                  <OrgLine h={32} />
                  <OrgDept label="Capacitación y Desarrollo del Talento" />
                  <OrgLine h={30} />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 12,
                    }}
                  >
                    <OrgCircleSmall src={imgAmayrani} alt="Amayrani Herrera" />
                    <OrgPerson
                      roleLines="Coordinador de<br>Capacitación"
                      name="Amayrani Herrera"
                    />
                  </div>
                  <OrgLine h={30} />
                  <div style={{ position: "relative", width: "100%" }}>
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: "25%",
                        right: "25%",
                        height: 1,
                        background: "#C8C0B4",
                      }}
                    />
                    <div style={{ display: "flex", alignItems: "flex-start" }}>
                      <div
                        style={{
                          flex: 1,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: 12,
                          padding: "0 6px",
                        }}
                      >
                        <OrgLine h={28} />
                        <OrgCircleSmall
                          src={imgAracely}
                          alt="Aracely Estrada"
                        />
                        <OrgPerson
                          roleLines="Especialista en<br>Desarrollo Profesional"
                          name="Aracely Estrada"
                        />
                      </div>
                      <div
                        style={{
                          flex: 1,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: 12,
                          padding: "0 6px",
                        }}
                      >
                        <OrgLine h={28} />
                        <OrgCircleSmall src={imgPnj2} alt="Maria García" />
                        <OrgPerson
                          roleLines="Diseñador de Programas<br>de Formación"
                          name="Maria García"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
