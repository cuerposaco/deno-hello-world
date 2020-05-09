FROM hayd/alpine-deno:0.42.0
RUN deno upgrade
RUN deno --version && deno upgrade -h
RUN deno install --unstable --allow-read --allow-run -f https://deno.land/x/denon/denon.ts
RUN ls ~/.deno/bin
RUN deno run -h
# ENTRYPOINT [ "~/.deno/bin/denon" ]


