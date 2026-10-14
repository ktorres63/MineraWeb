interface PlaceholderPageProps {
  title?: string
  message?: string
}

export default function PlaceholderPage({
  title = 'Página en construcción',
  message = 'Esta sección aún no está disponible en la demo.',
}: PlaceholderPageProps) {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-white px-6 pt-[118px]">
      <div className="max-w-xl text-center">
        <h1 className="mb-4 text-3xl font-black text-brand-red">{title}</h1>
        <p className="text-brand-ink">{message}</p>
      </div>
    </section>
  )
}
