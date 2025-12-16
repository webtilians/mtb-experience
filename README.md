# MTB Experience - Andalucía

Plataforma web para organización de viajes de Mountain Bike (Enduro/DH) en el sur de Andalucía.

## 🚀 Stack Tecnológico

- **React 18** con TypeScript
- **Vite** como bundler
- **React Router** para navegación
- **Tailwind CSS** para estilos
- **Lucide React** para iconos

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── cards/           # CardZone, CardStay, CardExtra
│   ├── layout/          # Header, Footer, Layout
│   └── ui/              # Button, Input, Badge, Stepper, etc.
├── pages/
│   ├── public/          # Home, Zonas, Alojamientos, FAQ, Contact, Legal
│   ├── builder/         # Wizard de reserva (5 pasos)
│   ├── account/         # Mi Reserva
│   └── admin/           # Panel de administración
├── App.tsx              # Rutas principales
├── main.tsx             # Entry point
└── index.css            # Estilos globales + Tailwind
```

## 🛠️ Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build
npm run preview
```

## 🎨 Design System

### Tokens de Color
- `background`: #FAFAFA
- `surface`: #FFFFFF
- `text-primary`: #1A1A1A
- `text-secondary`: #6B7280
- `accent`: #10B981 (Verde aventura)
- `success`: #22C55E
- `warning`: #F59E0B
- `danger`: #EF4444

### Componentes UI
- **Button**: Primary, Secondary, Ghost, Link
- **Input**: Text, Email, Phone, Date, Number
- **Select**: Dropdown con opciones
- **Badge**: Verified, Pending, Confirmed, Partner
- **Stepper**: Wizard de 5 pasos
- **Cards**: Zone, Stay, Extra

## 📱 Páginas

### Públicas
- `/` - Home con hero y zonas destacadas
- `/zonas` - Mapa/lista de zonas
- `/zonas/:id` - Detalle de zona
- `/alojamientos` - Lista de casas verificadas
- `/alojamientos/:id` - Detalle de alojamiento
- `/alojamiento-externo` - Flujo para reservas Airbnb/Booking
- `/faq` - Preguntas frecuentes
- `/contacto` - Formulario de contacto
- `/terminos`, `/privacidad`, `/cancelacion` - Páginas legales

### Builder (Wizard de Reserva)
- `/planificar` - Paso 1: Detalles del viaje
- `/planificar/alojamiento` - Paso 2: Selección de alojamiento
- `/planificar/guia` - Paso 3: Pack de guía
- `/planificar/extras` - Paso 4: Extras opcionales
- `/planificar/checkout` - Paso 5: Resumen y pago
- `/planificar/confirmacion` - Página de éxito

### Account
- `/mi-reserva` - Acceso con email + código

### Admin
- `/admin` - Dashboard
- `/admin/reservas` - Gestión de reservas
- `/admin/leads` - Leads de contacto/externos
- `/admin/zonas` - Gestión de zonas
- `/admin/alojamientos` - Gestión de alojamientos
- `/admin/extras` - Gestión de extras y proveedores

## 🔜 Próximos Pasos

1. **Integración de Mapa**: Mapbox o Google Maps para `/zonas`
2. **Backend**: API con Node.js/Express o similar
3. **Base de datos**: PostgreSQL o MongoDB
4. **Pagos**: Integración con Stripe
5. **Autenticación**: Para panel admin
6. **Emails**: Notificaciones transaccionales
7. **WhatsApp Business API**: Para confirmaciones

## 📝 Notas

- Las imágenes actuales son placeholders de Unsplash
- El número de WhatsApp debe configurarse en los componentes
- Los precios y datos son de ejemplo

## 📄 Licencia

Proyecto privado - MTB Experience © 2024
