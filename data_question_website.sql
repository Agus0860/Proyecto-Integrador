USE question_website; 

INSERT INTO Usuario (nombre, apellido, email, contrasenia) VALUES 
('Agustin', 'Cherungá', 'agustin.cherunga@example.com', 'password123'),
('María', 'González', 'maria.gonzalez@example.com', 'password123'),
('Joaquín', 'Pérez', 'joaquin.perez@example.com', 'password123'),
('Sofía', 'Ramírez', 'sofia.ramirez@example.com', 'password123');

INSERT INTO Articulo (id_usuario, titulo, contenido) VALUES 
(1, '¿Cómo resolver una ecuación cuadrática?', 'Tengo problemas para resolver ecuaciones cuadráticas, ¿alguien puede explicarlo paso a paso?'),
(2, '¿Qué es el Teorema de Pitágoras?', 'Quisiera entender cómo se aplica el Teorema de Pitágoras en triángulos rectángulos, ¿alguien tiene ejemplos?'),
(3, '¿Cómo se usan los pronombres relativos en inglés?', 'No entiendo cuándo usar "which" o "that" en una oración en inglés, ¿alguien me puede ayudar?');

INSERT INTO Respuesta (id_articulo, id_usuario, contenido) VALUES 
(1, 2, 'Para resolver una ecuación cuadrática, debes usar la fórmula general: x = (-b ± √(b² - 4ac)) / 2a.'),
(2, 3, 'El Teorema de Pitágoras dice que en un triángulo rectángulo, la suma de los cuadrados de los catetos es igual al cuadrado de la hipotenusa.'),
(3, 4, 'En inglés, "which" se usa para cosas y "that" para personas o cosas que forman parte de la oración principal.');

INSERT INTO Comentario (id_articulo, id_usuario, contenido) VALUES 
(1, 3, 'Gracias por la pregunta, también tenía dudas sobre esto.'),
(2, 4, 'Muy buena pregunta, es algo clave en geometría.'),
(3, 1, 'Creo que también depende del tipo de oración, ¿no?');

INSERT INTO Comentario (id_respuesta, id_usuario, contenido) VALUES 
(1, 1, '¡Gracias! Esa fórmula me ayudó a resolver mi ejercicio.'),
(2, 2, 'Muy bien explicado, me quedó clarísimo.'),
(3, 3, 'Siempre tenía esa duda, gracias por aclararlo.');









