export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-text-primary mb-8">
          Política de privacidad
        </h1>

        <div className="prose prose-gray max-w-none">
          <p className="text-text-secondary">
            Última actualización: Diciembre 2024
          </p>

          <h2 className="text-xl font-semibold text-text-primary mt-8 mb-4">
            1. Responsable del tratamiento
          </h2>
          <p className="text-text-secondary mb-4">
            MTB Experience es responsable del tratamiento de los datos personales que nos proporciones.
          </p>

          <h2 className="text-xl font-semibold text-text-primary mt-8 mb-4">
            2. Datos que recopilamos
          </h2>
          <p className="text-text-secondary mb-4">
            Recopilamos los siguientes datos personales:
          </p>
          <ul className="list-disc list-inside text-text-secondary mb-4 space-y-2">
            <li>Nombre y apellidos</li>
            <li>Dirección de correo electrónico</li>
            <li>Número de teléfono</li>
            <li>Datos de reserva (fechas, preferencias, etc.)</li>
            <li>Información de pago (procesada de forma segura por pasarelas de pago)</li>
          </ul>

          <h2 className="text-xl font-semibold text-text-primary mt-8 mb-4">
            3. Finalidad del tratamiento
          </h2>
          <p className="text-text-secondary mb-4">
            Utilizamos tus datos para:
          </p>
          <ul className="list-disc list-inside text-text-secondary mb-4 space-y-2">
            <li>Gestionar tu reserva y prestarte los servicios contratados</li>
            <li>Comunicarnos contigo sobre tu viaje</li>
            <li>Coordinar servicios con terceros colaboradores</li>
            <li>Enviarte información comercial (solo si lo autorizas)</li>
          </ul>

          <h2 className="text-xl font-semibold text-text-primary mt-8 mb-4">
            4. Base legal
          </h2>
          <p className="text-text-secondary mb-4">
            El tratamiento de tus datos se basa en la ejecución del contrato de servicios y, para comunicaciones comerciales, en tu consentimiento expreso.
          </p>

          <h2 className="text-xl font-semibold text-text-primary mt-8 mb-4">
            5. Compartir datos con terceros
          </h2>
          <p className="text-text-secondary mb-4">
            Podemos compartir tus datos con:
          </p>
          <ul className="list-disc list-inside text-text-secondary mb-4 space-y-2">
            <li>Proveedores de alojamiento (para gestionar tu reserva)</li>
            <li>Partners de transporte y servicios (para coordinar servicios adicionales)</li>
            <li>Pasarelas de pago (para procesar pagos de forma segura)</li>
          </ul>

          <h2 className="text-xl font-semibold text-text-primary mt-8 mb-4">
            6. Tus derechos
          </h2>
          <p className="text-text-secondary mb-4">
            Tienes derecho a acceder, rectificar, suprimir, limitar y oponerte al tratamiento de tus datos, así como a la portabilidad de los mismos. Para ejercer estos derechos, contacta con nosotros en info@mtbexperience.com
          </p>

          <h2 className="text-xl font-semibold text-text-primary mt-8 mb-4">
            7. Cookies
          </h2>
          <p className="text-text-secondary mb-4">
            Utilizamos cookies técnicas y analíticas. Puedes configurar tu navegador para rechazarlas, aunque algunas funcionalidades pueden verse afectadas.
          </p>
        </div>
      </div>
    </div>
  )
}
