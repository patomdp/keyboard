set ANTHROPIC_BASE_URL=https://openrouter.ai/api && set ANTHROPIC_AUTH_TOKEN=TOKEN && claude --dangerously-skip-permissions

minimax/minimax-m2.5 (0.30M output)

openrouter/free

qwen/qwen3-coder:free


- copia este repositorio en mi proyecto: https://github.com/Leonxlnx/taste-skill en la carpeta skills
- crea un sitio web para vender un teclado. Usa tu skill de design-taste-frontend. Te doy una breve descripcion: se tratan de teclados mecanicos elegantes y minimalistas. Al estilo Apple.
- Vamos a Magic WOrkflow o a HighsFIeld para usar nanoBanana 2 o Pro

"Genera un despiece realista de este teclado en horizontal al estilo apple donde se aprecien los componentes internos con un enfoque de marketing potente donde el usuario perciba maxima calidad" 16:9 1k, 4imagenes

- no incluyas texto, y que tenga una inclinacion de 45 grados con respecto al espectador

- Genera esta imagen del teclado ensamblado
- "Highly detailed photorealistic close-up of a fully assembled mechanical keyboard on a sleek desk surface, soft natural daylight illuminating the textured keycaps and brushed metal frame, subtle reflections enhancing the modern tech aesthetic, cool gray and black color palette with hints of blue LED backlighting, shallow depth of field focusing on the keyboard’s intricate switches and keys, crisp and clean composition evoking precision and craftsmanship."


- Frame inicial y frame final, hacemos el video con un prompt:
- "Vista de ingeniería de alta calidad de un teclado. Sin logotipos. Animación fluida de principio a fin a medida que los componentes se mueven. Todas las
piezas internas a la vista. Fondo totalmente blanco. Todas las piezas deben permanecer dentro del encuadre del video; es decir, nada debe salirse de
los márgenes." 1080p 16:9 5seg

- genial, ahora tengo un video que puse en la carpeta @src\assets\media\  usalo y crea una animacion debajo de la seccion Hero, la animacion debe estar centrada en la pagina. La animacion tiene que avanzar frame por frame a medida que el usuario hace el scroll por la web. Las caracteristicas se deben ir mostrando a medida que el usuario hace scroll.

- Muestra la animacion del teclado tal cual esta a la derecha y las caracteristicas a la izquierda y quiero que tanto las caracteristicas como la animacion ocurran a medida que hacemos scroll.

- Que no tenga lag, optimiza para que sea mucho mas fluido y estetico
