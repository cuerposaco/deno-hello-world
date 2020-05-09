import { serve } from "https://deno.land/std@v0.42.0/http/server.ts";
const s = serve({ hostname: "0.0.0.0", port: 8000 });
console.log("http://localhost:8000/");
for await (const req of s) {
    req.respond({ body: "Hola Ainhoa e Ivan\n" });
}

// import { Application } from "https://deno.land/x/oak/mod.ts";

// const app = new Application();

// app.use((ctx) => {
//     ctx.response.body = "Hello world!";
// });

// await app.listen("0.0.0.0:8000");