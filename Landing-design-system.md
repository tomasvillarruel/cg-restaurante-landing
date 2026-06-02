# Circuito Gastronómico — Design System

```yaml
name: Circuito Gastronómico Media System
colors:
  # Surfaces — base clara, jerarquía por luminosidad descendente
  surface: '#FFFFFF'
  surface-dim: '#F5F4F0'
  surface-bright: '#FFFFFF'
  surface-container-lowest: '#FAFAF8'
  surface-container-low: '#F5F4F0'
  surface-container: '#EEECEA'
  surface-container-high: '#E5E3DF'
  surface-container-highest: '#D8D5D0'

  # Texto sobre superficies
  on-surface: '#1A1A1A'
  on-surface-variant: '#4A4745'
  inverse-surface: '#1A1A1A'
  inverse-on-surface: '#F5F4F0'

  # Bordes y separadores
  outline: '#B0ABA4'
  outline-variant: '#D8D5D0'

  # Primary — Rojo vino (acento de marca)
  surface-tint: '#9C1E21'
  primary: '#9C1E21'
  on-primary: '#FFFFFF'
  primary-container: '#F5E6E6'
  on-primary-container: '#6B1215'
  inverse-primary: '#F5E6E6'

  # Secondary — Slate azulado (soporte estructural)
  secondary: '#334155'
  on-secondary: '#FFFFFF'
  secondary-container: '#E8ECF2'
  on-secondary-container: '#1E2D40'

  # Tertiary — Gris cálido (fondos neutros, textos auxiliares)
  tertiary: '#69727D'
  on-tertiary: '#FFFFFF'
  tertiary-container: '#F0EEE9'
  on-tertiary-container: '#434140'

  # Estados semánticos
  error: '#B91C1C'
  on-error: '#FFFFFF'
  error-container: '#FEE2E2'
  on-error-container: '#7F1D1D'

  # Fixed tokens (para componentes que no cambian en tema)
  primary-fixed: '#F5E6E6'
  primary-fixed-dim: '#E8C5C6'
  on-primary-fixed: '#6B1215'
  on-primary-fixed-variant: '#9C1E21'

  secondary-fixed: '#E8ECF2'
  secondary-fixed-dim: '#C9D2DF'
  on-secondary-fixed: '#1E2D40'
  on-secondary-fixed-variant: '#334155'

  tertiary-fixed: '#F0EEE9'
  tertiary-fixed-dim: '#D8D5D0'
  on-tertiary-fixed: '#1A1A1A'
  on-tertiary-fixed-variant: '#69727D'

  # Base
  background: '#FAFAF8'
  on-background: '#1A1A1A'
  surface-variant: '#EEECEA'

typography:
  headline-xl:
    fontFamily: Roboto
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
  headline-lg:
    fontFamily: Roboto
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Roboto
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Roboto
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Roboto
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Roboto
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.08em
  stat-lg:
    fontFamily: Roboto
    fontSize: 80px
    fontWeight: '700'
    lineHeight: '1.0'

rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px

spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  section-padding: 96px
  stack-sm: 16px
  stack-md: 32px
  stack-lg: 64px
```

---

## Brand & Style

### Contexto del producto

Esta landing tiene un único objetivo: **convertir dueños de restaurantes cordobeses en suscriptores del Método CG 2.0**, la membresía anual de Circuito Gastronómico. No es una página institucional ni un artículo editorial — es una herramienta de captación de leads B2B con foco en conversión.

El visitante es un **dueño o encargado de restaurante** que probablemente:
- Siente que su marketing no está dando resultados
- Ve que su Instagram no crece o no trae clientes
- Quiere más visibilidad pero no sabe cómo lograrlo
- Desconfía de promesas vacías — ya le vendieron humo antes

La propuesta de valor central es el **Método CG 2.0**: un sistema de marketing multiplataforma (web, app, redes, radio, TV, eventos e influencers) que garantiza visibilidad medible — entre 10 y 22 apariciones anuales según el plan — más comunidad, capacitación y acceso a eventos.

Los tres planes son **Platino** (protagonistas de la escena), **Oro** (en expansión) y **Plata** (negocios que comienzan). La conversión no es inmediata: el objetivo de la landing es **captar el lead** (nombre, restaurante, teléfono/mail) para que el equipo comercial (Natalia, Belén, Sergio) cierre la venta.

---

### Principios de diseño para alta conversión

Este sistema de diseño se construye sobre tres pilares: **autoridad probada, claridad de propuesta y urgencia emocional**. La estética equilibra la credibilidad de un medio establecido con la directness de una página de ventas profesional.

La narrativa visual sigue la estructura clásica de conversión: **problema → solución → prueba → oferta → acción**. Cada sección empuja al visitante un paso más cerca del formulario. No hay elementos decorativos que no cumplan una función persuasiva.

La personalidad de marca en esta landing es **"El Socio Estratégico"** — no un proveedor de servicios, sino un aliado que ya hizo crecer a otros restaurantes como el tuyo y tiene el sistema para demostrarlo. Rodrigo Arozamena (Los Aroza) y Luciana Del Rosso (Junior B) son la prueba social que humaniza esa promesa.

---

### Voz y tono para la landing

- **Directa y sin rodeos:** el dueño de restaurante no tiene tiempo. Cada titular tiene que decir exactamente qué gana.
- **Empática con el dolor:** nombrar los problemas reales ("tu Instagram no crece", "sentís que tu negocio no es suficientemente reconocido") antes de ofrecer la solución.
- **Concreta y medible:** "22 apariciones al año", "2 visitas de creadores de contenido", "3 capacitaciones". Los números generan confianza.
- **Comunidad, no servicio:** el acceso al grupo de WhatsApp con otros dueños y a los eventos masivos posiciona esto como pertenencia, no como una compra.
- **Sin letra chica:** explicitarlo como diferencial ("Sin letra chica") refuerza la confianza en un público que ya fue quemado por otros proveedores.

---

## Colores

La paleta se ancla en una base **Crema/Blanco Cálido** que evoca papel de calidad y espacios gastronómicos sofisticados. Evita la frialdad del blanco puro (#FFFFFF) en superficies grandes.

- **Rojo Vino (`#9C1E21`):** Color de acento y acción. Exclusivamente para CTAs, links, highlights y elementos interactivos. Evoca vino, pasión y sabor. No usar como color de texto corrido.
- **Slate Azulado (`#334155`):** Color primario estructural. Usado para textos de peso, encabezados secundarios y elementos de navegación. Genera confianza y contraste sin la agresividad del negro puro.
- **Gris Cálido (`#69727D`):** Rol auxiliar. Subtítulos, metadatos, fechas, créditos fotográficos y etiquetas.
- **Superficies Crema:** Escala de neutros cálidos (con una leve tonalidad amarillo-arena) para crear profundidad entre fondo, cards y elementos elevados. Nunca usar grises fríos puros.
- **Blanco (`#FFFFFF`):** Reservado para superficies activas, modales y fondos de cards con contenido denso.

> **Regla de oro del color:** El rojo vino aparece como máximo en el 10–15% de cualquier pantalla. Su impacto viene de la escasez.

---

## Tipografía

El sistema usa **Roboto como fuente única** en toda la interfaz. La jerarquía visual no se construye con familias tipográficas distintas sino con variaciones de peso, tamaño y espaciado dentro de la misma familia. Esto simplifica la implementación y refuerza una identidad consistente y reconocible.

- **Titulares (700 / Bold):** Para headlines, nombres de restaurantes y cifras de impacto. El peso bold de Roboto tiene suficiente presencia para anclar secciones sin necesidad de una serif.
- **Cuerpo y UI (400 / Regular):** Para artículos, descripciones, navegación y formularios. La construcción geométrica y neutral de Roboto garantiza máxima legibilidad en interfaces densas.
- **Semibold (600):** Peso intermedio para subtítulos, labels destacadas y nombres propios dentro de párrafos. Evitar el uso de 500 / Medium para no diluir la escala de jerarquía.
- **Tratamiento clave:** En titulares de portada, destacar con color primario (`#9C1E21`) una palabra o frase clave para anclar visualmente la lectura. El contraste cromático compensa la ausencia de una serif de display.
- **Label-caps:** Usar `font-weight: 600` + `letter-spacing: 0.08em` + `text-transform: uppercase` para categorías de sección ("RESTAURANTES", "NOVEDADES", "PROTAGONISTAS"). Da carácter editorial sin recurrir a una fuente diferente.

---

## Layout & Espaciado

El layout sigue un modelo de **Grilla de 12 columnas** con énfasis en el ritmo vertical y la respiración entre secciones. La estructura editorial predomina sobre el grid de producto.

- **Secciones:** Cada categoría de contenido vive en un bloque vertical diferenciado, usando cambios sutiles de tono de superficie (`surface-container` vs `surface-dim`) en lugar de separadores explícitos.
- **Grillas de datos:** Métricas y estadísticas se organizan en clusters de 2 o 4 columnas. Cards de restaurantes en grillas de 3 columnas en desktop, 2 en tablet, 1 en mobile.
- **Márgenes:** Mínimo 64px horizontal en desktop. El contenido editorial (artículos) usa una columna de lectura de máximo 720px para garantizar comodidad de lectura (~60–70 caracteres por línea).
- **Hero:** Siempre full-width con imagen de fondo y overlay crema semi-transparente. El texto se ancla a la zona inferior-izquierda.

---

## Elevación & Profundidad

La jerarquía se establece mediante **Capas Tonales Cálidas** en lugar de sombras duras. El sistema es light-mode pero no plano — la profundidad se construye con temperatura, no con oscuridad.

- **Capas de superficie:** El fondo base usa el tono más cálido-oscuro (`#F5F4F0`). Las cards y contenedores interactivos usan tonos más claros y blancos para "elevarse" sobre el fondo — inversión intencional respecto al sistema dark.
- **Efectos de glass:** Sobre imágenes de fondo, usar overlay crema semi-transparente (`rgba(250, 250, 248, 0.85)`) con backdrop-blur de 12px para mantener legibilidad del texto sin perder contexto visual.
- **Sombras:** Sombras suaves y cálidas (`box-shadow: 0 2px 12px rgba(26, 26, 26, 0.08)`) en cards. Nunca sombras frías o duras.
- **Bordes:** Usar bordes de 1px en `outline-variant` (`#D8D5D0`) para definir cards sin romper la continuidad cálida del fondo. Nunca bordes negros.
- **Acento con color:** Cards destacadas o "premium" pueden usar un borde izquierdo de 3px en `primary` (`#9C1E21`) como indicador visual de relevancia editorial.

---

## Formas

El lenguaje de formas es **Orgánico y Confiable**.

- **Esquinas:** Radio base de 6px–8px para cards, imágenes y contenedores. Más suave que el mínimo de 4px original para evocar calidez sin perder estructura.
- **Botones primarios:** Pill-shape (border-radius: full) para CTAs de alta prioridad ("Ver restaurante", "Leer más", "Reservar"). El contraste visual los distingue claramente de los elementos de contenido.
- **Botones secundarios:** Radio de 6px con borde en `primary` y fondo transparente. Para acciones secundarias.
- **Imágenes:** Mismo radio que sus cards contenedoras (8px) para mantener cohesión visual en el grid. Las imágenes hero son siempre full-bleed sin radio.
- **Tags y badges de categoría:** Pill-shape con fondo en `primary-container` (`#F5E6E6`) y texto en `on-primary-container` (`#6B1215`).

---

## Componentes

### Botones

- **Primario:** Fondo `primary` (`#9C1E21`), texto blanco, pill-shape. Para "Ver restaurante", "Leer nota", CTAs principales.
- **Secundario / Ghost:** Fondo transparente, borde 1px en `primary`, texto en `primary`. Incluir ícono de flecha `→` para indicaciones de navegación.
- **Terciario:** Link subrayado en `primary` para navegación de baja prioridad ("Más notas", "Ver todas las categorías").

### Cards

- **Cards de artículo:** Imagen superior con ratio 16:9, esquinas 8px. Debajo: badge de categoría (label-caps) + titular en `headline-md` (Roboto) + fecha/autor en `body-md` gris.
- **Cards de restaurante:** Imagen cuadrada o 4:3 + nombre en `headline-md` + tipo de cocina en label-caps + descripción breve en `body-md`. Borde izquierdo opcional en `primary` para destacados.
- **Cards de datos / estadísticas:** Número grande en `stat-lg` (Roboto, `#9C1E21`) + descripción en `body-md` (`#334155`). Fondo `surface-container` con sombra suave.
- **Card Protagonista:** Imagen de fondo full-card con overlay crema degradado desde la base. Nombre del protagonista en `headline-md` blanco anclado abajo-izquierda.

### Inputs y Formularios

- **Campo de búsqueda:** Fondo `surface-container-low`, borde 1px en `outline-variant`, border-radius full (pill, tal como está en el sistema actual). Estado focus: borde 2px en `primary` con sutil box-shadow en rojo vino al 15% de opacidad.
- **Formularios comerciales:** Estilo "línea minimalista" — fondo `surface-container`, borde inferior 1px. Estado focus activa borde completo en `primary`.
- **Labels:** Estilo `label-caps` posicionadas directamente sobre el input.

### Navegación

- **Link activo:** Color `primary` (`#9C1E21`) con underline de 2px.
- **Link hover:** Transición suave a `primary` en 150ms.
- **Separadores de sección:** Usar `label-caps` en `tertiary` (`#69727D`) en lugar de líneas horizontales siempre que sea posible.

### Imágenes

Usar fotografía de alta calidad con tonos naturales y cálidos que reflejen la gastronomía real. Priorizar:
- Luz natural, no artificial
- Colores de alimentos reales y apetitosos
- Espacios de restaurantes con ambiente auténtico

Evitar imágenes con filtros fríos, azulados o desaturados. A diferencia del sistema base oscuro, aquí los tonos cálidos y vibrantes son aliados, no enemigos.

---

## Notas de migración desde el sistema base

| Elemento | Sistema original (dark) | Adaptación Circuito (light) |
|---|---|---|
| Superficie base | Deep navy `#111318` | Crema cálido `#FAFAF8` |
| Acento principal | Azul vibrante `#b6c4ff` | Rojo vino `#9C1E21` |
| Tipografía titular | Newsreader (serif) | Roboto Bold (700) |
| Tipografía body | Inter | Roboto Regular (400) |
| Elevación de cards | Tono más claro sobre oscuro | Tono más claro sobre crema |
| Glass effects | Blur sobre oscuro | Blur sobre crema con overlay |
| Sombras | Prácticamente ninguna | Suaves y cálidas |
| Fotografía | Desaturada, fría | Natural, cálida, apetitosa |
