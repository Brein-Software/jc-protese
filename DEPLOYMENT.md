# Deploy no GitHub Pages

O workflow em `.github/workflows/deploy-pages.yml` gera o site com `npm run generate` e publica `.output/public`. O site usa a raiz `/` para o domínio `jcprotetico.com.br`.

## Configuração no GitHub

Em **Brein-Software/jc-protese → Settings → Pages → Custom domain**, informe `jcprotetico.com.br` e salve. Como a publicação usa GitHub Actions, o arquivo `public/CNAME` é incluído no artefato, mas não substitui essa configuração nas opções do repositório. Após a emissão do certificado, habilite **Enforce HTTPS**.

## Registros no provedor de DNS

| Tipo | Nome | Valor |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | brein-software.github.io |

Remova registros `A`/`AAAA`/`ALIAS`/`ANAME` conflitantes para `@` e registros conflitantes para `www`. O domínio raiz usa registros `A`; o `CNAME` de DNS é apenas para `www`. Com ambos configurados, o GitHub Pages redireciona `www.jcprotetico.com.br` para `jcprotetico.com.br`.

Para conferir a propagação:

```bash
dig jcprotetico.com.br +noall +answer -t A
dig www.jcprotetico.com.br +noall +answer -t CNAME
```
