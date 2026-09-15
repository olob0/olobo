export default function Footer() {
  return (
    <footer className="border-border flex h-20 items-center justify-center border-t px-6">
      <div>
        <p className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()}{" "}
          <a className="hover:underline" href="https://github.com/olob0/">
            olob0
          </a>
        </p>
      </div>
    </footer>
  )
}
