# Deploy no GitHub Pages

Este projeto está temporariamente configurado como um GitHub Pages de projeto:

`https://brein-software.github.io/jc-protese/`

O workflow em `.github/workflows/deploy-pages.yml` gera o site com `npm run generate` e publica `.output/public`.

## Configuração temporária

O caminho `/jc-protese/` é definido como fallback em `nuxt.config.ts` e também explicitamente no workflow pela variável `NUXT_APP_BASE_URL`.

O logo usa um caminho relativo em `data/business.ts`, porque caminhos absolutos começando por `/` ignoram o subdiretório do GitHub Pages.

## Remover em uma build posterior

Quando o site for servido na raiz de um domínio próprio ou em um repositório do tipo `usuario.github.io`:

1. Remova o fallback `/jc-protese/` de `nuxt.config.ts` e use `/` como `baseURL`.
2. Remova `NUXT_APP_BASE_URL` do workflow.
3. Mantenha o logo relativo ou ajuste-o para o caminho definido pela nova hospedagem.
4. Atualize a URL deste documento e a configuração de domínio do GitHub Pages, se aplicável.

Para testar localmente com o caminho de produção:

```bash
NUXT_APP_BASE_URL=/jc-protese/ npm run generate
```
