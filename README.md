[Windi CSS](https://github.com/windicss/windicss) vs [Tailwind CSS JIT](https://github.com/tailwindlabs/tailwindcss-jit) on [Vite](https://github.com/vitejs/vite)

```bash
yarn
yarn dev
```

to start both servers

http://localhost:3100/ - Windi CSS<br>
http://localhost:3200/ - Tailwind CSS JIT

edit `App.vue` will trigger updates for both servers.

> The current source file is pretty small and simple, I would love to receive contributions of snippets for a more complex example. Thanks.

## Configuration

- Use yarn workspaces hoist Vite common deps to make sure they are using the exact same version. 
- All package versions are fixed with a shared lockfile.
- Both configure enables watcher for only the `vue` extension.
- **Tailwind JIT**: 
  - Configured by the guide from the [Tailwind JIT](https://github.com/tailwindlabs/tailwindcss-jit) README.
  - Without `autoprefixer` installed (Windi CSS have the feature but does not need it)
- **Windi CSS**:
  - Use [`vite-plugin-windicss`](https://github.com/windicss/vite-plugin-windicss)
