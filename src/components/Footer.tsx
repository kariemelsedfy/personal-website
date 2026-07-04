export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-content flex-col items-center gap-2 px-6 text-center">
        <p className="font-mono text-xs text-body/70">
          © 2026 Karim ElSedfy · designed & built from scratch
        </p>
        <p className="font-mono text-xs text-body/50">
          React · TypeScript · Tailwind · three.js —{' '}
          <a
            href="https://github.com/kariemelsedfy/personal-website"
            target="_blank"
            rel="noreferrer"
            className="underline decoration-line underline-offset-4 transition-colors hover:text-bright"
          >
            view source
          </a>
        </p>
      </div>
    </footer>
  )
}
