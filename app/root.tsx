import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";

const fontHref =
  "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,520;9..144,620&family=Outfit:wght@400;500;600&display=swap";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f7f6f2" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={fontHref} />
        <link rel="icon" href="/products/logo.png" />
        <Meta />
        <Links />
      </head>
      <body style={{ margin: 0, background: "#f7f6f2", color: "#17211a" }}>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function Root() {
  return <Outlet />;
}

export { ErrorBoundary } from "@agent-native/toolkit/app/shared";
