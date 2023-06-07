import { defineConfig } from "vite";

export default defineConfig({
    build:{
        lib:{
            entry:'src/table.ts',
            formats:['es']
        },
        rollupOptions:{
            external:[/^lit/]
        }
    }
})