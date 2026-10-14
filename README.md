# Cinthia Scheffer — portfólio

Landing page estática em HTML5, CSS3 e JavaScript, baseada na referência fornecida. Não exige Node.js, build, banco de dados, serviços externos ou credenciais.

## Executar localmente

Na pasta do projeto:

```sh
python3 -m http.server 8000 --bind 0.0.0.0
```

Abra a porta 8000 no seu navegador local. Para parar, use Ctrl+C. Também é possível abrir `index.html` diretamente no navegador.

## Estrutura

- `index.html`: textos, seções, metadados de SEO e estrutura semântica.
- `assets/css/styles.css`: cores, tipografia, composição e versões responsivas.
- `assets/js/config.js`: destinos dos botões e links.
- `assets/js/main.js`: menu móvel e tratamento de destinos pendentes.
- `assets/images/`: imagens locais e favicon.
- `screenshots/`: capturas completas em desktop (1440 px), tablet (768 px) e celular (390 px).

## Atualizar conteúdo

**Textos:** edite o conteúdo das tags no `index.html`, preservando os IDs das seções para manter as âncoras. Os textos foram transcritos da imagem de referência; confirme nomes, datas e redação antes de publicar.

**Fotos:** os arquivos SVG são espaços reservados, não fotografias finais. Coloque as imagens em `assets/images/`, preferencialmente WebP ou AVIF, e atualize os atributos `src`, `alt`, `width` e `height` em `index.html`. Não renomeie um JPEG para `.svg`. A imagem principal aparece também no terceiro projeto. Recomendações:

| Uso | Proporção aproximada | Tamanho recomendado |
| --- | --- | --- |
| Evento principal | 1,1:1 | 1200 × 1100 px |
| Retrato sobreposto | 1,13:1 | 520 × 460 px |
| Projetos | 1,69:1 | 900 × 532 px |

Use `object-position` no CSS para ajustar o recorte. Procure manter cada foto abaixo de 250 KB. Preserve o carregamento prioritário da imagem principal e `loading="lazy"` nas imagens dos projetos.

**Links:** preencha `window.PORTFOLIO_LINKS` em `assets/js/config.js` com os endereços reais para `linkedin`, `contato`, `franqueados`, `multicanal`, `aegea` e `eventos`. Contato aceita `mailto:`, `tel:` ou URL HTTPS (por exemplo, WhatsApp). Nenhum contato foi inventado. Enquanto os destinos estiverem vazios, os botões levam à seção de contato e exibem um aviso de link ainda indisponível. Os projetos não possuem páginas de detalhes nesta entrega; os links podem apontar para páginas ou documentos externos reais.

**Visual:** as variáveis no início do CSS controlam a paleta vinho, rosa e off-white. Georgia e Arial são fontes locais semelhantes às da referência e dispensam downloads externos.

## Publicar em hospedagem convencional

1. Revise textos, preencha os links e substitua as fotografias reservadas.
2. Envie `index.html` e a pasta `assets/` para a pasta pública da hospedagem (`public_html`, `www` ou equivalente), mantendo a estrutura.
3. Ative HTTPS no painel da hospedagem.
4. Quando o domínio estiver definido, adicione uma URL canônica e `og:url` ao `<head>`. Para compartilhamento com imagem, adicione `og:image` com a URL absoluta de uma fotografia real. Não há domínio fictício configurado.
5. Confira o menu, todos os botões e imagens no endereço publicado.

Não é necessário enviar `.git`, `README.md` ou `screenshots/`. Não há processo Python a manter na hospedagem: ela serve os arquivos estáticos diretamente. O contato usa links; não há formulário ou envio de e-mail no servidor.

## Validação realizada

- Chromium: desktop 1440 × 1000, tablet 768 × 1024 e celular 390 × 844.
- Capturas completas revisadas visualmente contra a referência, com ajuste de composição, espaçamento e ícones.
- Carregamento das imagens, âncoras internas e ausência de erros JavaScript.
- Menu móvel: abrir, navegar, fechar e tecla Escape.
- Aviso acessível para links ainda não informados.
- Verificação de ausência de transbordamento horizontal.

Limites: a aparência final das fotografias depende dos arquivos originais; fontes são aproximações locais. Não foram realizados testes em dispositivos físicos ou em Safari/Firefox. As capturas mostram os espaços reservados e não representam conteúdo fotográfico final.
