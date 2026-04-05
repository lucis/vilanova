# Entre Cordas e Poesia

## 📖 Sobre o Projeto

"Entre Cordas e Poesia" é uma série documental produzida que explora a rica tradição da cantoria de viola e do repente nordestino. Esta coleção contém as transcrições completas de todos os 11 episódios da série, preservando digitalmente os conhecimentos, histórias e ensinamentos compartilhados pelos mestres repentistas.

## 🎯 Objetivo

Este projeto tem como objetivo:

- **Preservar o conhecimento**: Documentar digitalmente o conteúdo da série para facilitar pesquisas acadêmicas e consultas
- **Democratizar o acesso**: Tornar o conteúdo acessível em formato texto para pessoas com deficiência auditiva ou que preferem ler
- **Facilitar pesquisas**: Permitir buscas por palavras-chave e análise do conteúdo
- **Alimentar o Portal Vilanova**: Utilizar as transcrições como base de dados para o portal de literatura de cordel e repente

## 📝 Conteúdo dos Episódios

### Episódio 1 - Para Valorizar a Cantoria
**[episodio-01.txt](./episodio-01.txt)**
- **Participantes**: Raimundo Lira, Zé Viola, Ivanildo Vila Nova
- **Temas**: A essência do repente, o orgulho da profissão, preconceitos enfrentados

### Episódio 2 - Sílabas Tônicas e Rimas
**[episodio-02.txt](./episodio-02.txt)**
- **Foco**: Fundamentos técnicos da poesia de repente
- **Temas**: Estrutura das rimas, acentuação tônica, construção de versos

### Episódio 3 - Métrica
**[episodio-03.txt](./episodio-03.txt)**
- **Foco**: A matemática da poesia popular
- **Temas**: Contagem de sílabas, métrica dos versos, cadência

### Episódio 4 - Estrofes e Gêneros
**[episodio-04.txt](./episodio-04.txt)**
- **Foco**: Diversidade de formas poéticas
- **Temas**: Diferentes estrofes, gêneros do repente, modalidades

### Episódio 5 - A Peleja na Cantoria
**[episodio-05.txt](./episodio-05.txt)**
- **Foco**: A competição poética
- **Temas**: Duelos de repente, técnicas de peleja, estratégias

### Episódio 6 - A Música do Repente
**[episodio-06.txt](./episodio-06.txt)**
- **Foco**: A dimensão musical da cantoria
- **Temas**: Melodias, ritmos, afinação da viola

### Episódio 7 - O Repente nos Sertões de Então
**[episodio-07.txt](./episodio-07.txt)**
- **Foco**: História e contexto
- **Temas**: Origens, evolução, o repente no passado

### Episódio 8 - Influências Afro e Indígena
**[episodio-08.txt](./episodio-08.txt)**
- **Foco**: Raízes culturais
- **Temas**: Contribuições africanas e indígenas para o repente

### Episódio 9 - Mulheres no Repente
**[episodio-09.txt](./episodio-09.txt)**
- **Participantes**: Rafaela Pereira, Fátima Dantas
- **Temas**: Desafios enfrentados, conquista de espaço, novas gerações

### Episódio 10 - A Literatura do Repente
**[episodio-10.txt](./episodio-10.txt)**
- **Foco**: Valor literário
- **Temas**: Repente como literatura, reconhecimento acadêmico

### Episódio 11 - O Repente nos Sertões do Amanhã
**[episodio-11.txt](./episodio-11.txt)**
- **Participantes**: José Jonas (jovem repentista)
- **Temas**: Futuro da cantoria, novas gerações, preservação

## 🎬 Sobre a Série Original

Os vídeos originais estão disponíveis no YouTube e foram produzidos para documentar e valorizar a tradição da cantoria de viola. Cada episódio apresenta entrevistas com mestres repentistas, demonstrações práticas e reflexões sobre diferentes aspectos dessa arte milenar.

### Links dos Episódios

1. [Episódio 1](https://www.youtube.com/watch?v=ULbBggbGpB8) - Para Valorizar a Cantoria
2. [Episódio 2](https://www.youtube.com/watch?v=8OyCHRKxzSc) - Sílabas Tônicas e Rimas
3. [Episódio 3](https://www.youtube.com/watch?v=1Gphjb66_LA) - Métrica
4. [Episódio 4](https://www.youtube.com/watch?v=Ty7UEIye-QA) - Estrofes e Gêneros
5. [Episódio 5](https://www.youtube.com/watch?v=ADytJaJSYTU) - A Peleja na Cantoria
6. [Episódio 6](https://www.youtube.com/watch?v=rTkMk5cw7hc) - A Música do Repente
7. [Episódio 7](https://www.youtube.com/watch?v=1Sa2dfnwJNs) - O Repente nos Sertões de Então
8. [Episódio 8](https://www.youtube.com/watch?v=9ZchytBjNgE) - Influências Afro e Indígena
9. [Episódio 9](https://www.youtube.com/watch?v=GlhAQnTlA7w) - Mulheres no Repente
10. [Episódio 10](https://www.youtube.com/watch?v=z6Bfr4KipFQ) - A Literatura do Repente
11. [Episódio 11](https://www.youtube.com/watch?v=sd5yNkXyHV4) - O Repente nos Sertões do Amanhã

## 🔧 Metodologia Técnica

### Extração das Transcrições

As transcrições foram obtidas automaticamente utilizando a [SearchAPI YouTube Transcripts API](https://www.searchapi.io/), que extrai as legendas oficiais ou legendas automáticas geradas pelo YouTube.

**Processo:**
1. Para cada vídeo, foi realizada uma requisição à API com o `video_id`
2. As transcrições foram obtidas em português (`lang=pt`)
3. Cada transcrição foi salva em arquivo individual com metadados do episódio
4. O processo foi automatizado via script Deno

### Estrutura dos Arquivos

Cada arquivo de transcrição segue o padrão:
```
episodio-[número].txt
```

E contém:
- Título do episódio
- ID do vídeo no YouTube
- URL completa do vídeo
- Transcrição completa do conteúdo

## 💡 Uso no Portal Vilanova

As transcrições desta série serão integradas ao **Portal Vilanova**, um projeto dedicado à preservação e promoção da literatura de cordel e do repente nordestino. O portal utilizará este conteúdo para:

1. **Base de Conhecimento**: Criar uma seção educativa sobre técnicas e história do repente
2. **Busca Semântica**: Permitir que usuários busquem informações específicas sobre cantoria
3. **Análise com IA**: Utilizar o conteúdo para treinar modelos de análise de repentes e cordéis
4. **Referência Educacional**: Servir como material de apoio para estudantes e pesquisadores

## 📚 Temas Principais Abordados

- ✨ **Técnica**: Métrica, rima, estrofes, gêneros
- 🎵 **Música**: Melodias, ritmos, instrumentação
- 📖 **História**: Origens, evolução, contexto social
- 🌍 **Cultura**: Influências afro-indígenas, regionalismo
- 👥 **Sociedade**: Preconceitos, desafios, profissionalização
- 🚺 **Diversidade**: Papel das mulheres, novas gerações
- 🔮 **Futuro**: Preservação, inovação, continuidade

## 🎤 Mestres Participantes

A série conta com depoimentos de diversos mestres e artistas da cantoria:

- **Raimundo Lira** - Poeta repentista, senhor de terceira idade
- **Zé Viola** - Poeta repentista, senhor de terceira idade
- **Ivanildo Vila Nova** - Poeta repentista experiente
- **Antônio Silva (Toninho)** - Repentista, músico e produtor
- **Rafaela Pereira** - Poeta repentista
- **Fátima Dantas** - Jovem poeta e cordelista
- **José Jonas** - Adolescente iniciando na carreira de repentista

## 🙏 Agradecimentos

Agradecemos aos produtores da série "Entre Cordas e Poesia" por disponibilizar este conteúdo no YouTube, permitindo que ele seja preservado digitalmente e alcance ainda mais pessoas interessadas nesta rica manifestação cultural brasileira.

## 📄 Licença e Uso

Este material é disponibilizado para fins educacionais e de pesquisa. Os direitos autorais dos vídeos originais pertencem aos seus respectivos produtores. As transcrições foram extraídas das legendas públicas disponibilizadas no YouTube.

---

**Portal Vilanova** - Preservando a cultura do cordel e do repente nordestino 🎻📖