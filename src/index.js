const app = document.getElementById("app");
app.innerHTML = `
    <h1>Hola Webpack + ESM ■</h1>
    <p>Entorno: ${process.env.NODE_ENV}</p>
`;
if (import.meta && import.meta.webpackHot) {
    import.meta.webpackHot.accept();
}