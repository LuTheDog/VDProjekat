export default {
  artworks: [
    {
      id: 1,
      name: "Mona Lisa",
      description:
        "Considered an archetypal masterpiece of the Italian Renaissance, it has been described as \"the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world.\"[6] The painting's novel qualities include the subject's enigmatic expression,[7] monumentality of the composition, the subtle modelling of forms, and the atmospheric illusionism.[8]",
      price: 1000000000,
      author: 1,
      type: "painting",
      age: 520,
      images: ["monalisa1.jpg", "monalisa2.jpg", "monalisa3.jpg"],
    },
    {
      id: 2,
      name: "David",
      description:
        "Michelangelo's 'David' is one of the most iconic sculptures in the world. Created between 1501 and 1504, it depicts the biblical hero David standing triumphantly after defeating the giant Goliath. The statue stands at an impressive 17 feet (5.17 meters) tall and is carved out of a single block of marble. It showcases Michelangelo's exceptional skill in capturing human anatomy and expressing intense emotions through his meticulous attention to detail.",
      age: 519,
      price: 1000000000,
      author: 2,
      type: "sculpture",
      images: ["david1.png", "david2.png"],
    },
    {
      id: 3,
      name: "Starry Night",
      description:
        "Vincent van Gogh's 'Starry Night' is a mesmerizing painting depicting a village under a swirling sky. With vibrant colors and expressive brushstrokes, Van Gogh creates a dreamlike world where nature and the heavens converge, evoking a sense of awe and emotion.",
      price: 134,
      age: 1000000000,
      author: 4,
      type: "painting",
      images: ["vg4.png", "starryNight2.jpg"],
    },
    {
      id: 4,
      name: "Sunflowers",
      description:
        "'Sunflowers' is one of Vincent van Gogh's most famous paintings, created in 1888. This vibrant artwork depicts a bouquet of sunflowers in a vase, with their golden petals radiating warmth and vitality. Van Gogh's bold brushstrokes and intense use of color capture the essence of these iconic flowers, imbuing them with a sense of energy and life. The painting is a testament to Van Gogh's fascination with nature and his ability to convey emotions through his expressive style. 'Sunflowers' remains an enduring symbol of beauty and optimism, inviting viewers to appreciate the simple yet profound joys found in everyday life.",
      price: 300,
      age: 135,
      author: 4,
      type: "painting",
      images: ["vg3.png", "sunflowers2.jpg"],
    },
    {
      id: 5,
      name: "The Magpie",
      description:
        "'The Magpie' is a notable painting created by Claude Monet in 1868 during the winter season. This work captures a serene landscape covered in snow, with a solitary magpie perched on a fence. Monet's brushstrokes skillfully depict the delicate play of light and shadow on the snowy ground and the subtle textures of the surrounding trees. The contrast between the stark white snow and the dark figure of the magpie creates a captivating composition. 'The Magpie' showcases Monet's ability to capture the transitory moments of nature and his keen observation of light and atmosphere, which became defining characteristics of the Impressionist movement.",
      price: 100000000,
      age: 155,
      author: 3,
      type: "painting",
      images: ["magpie1.jpg", "magpie2.avif"],
    },
    {
      id: 6,
      name: "The Thinker",
      description:
        "'The Thinker' is a renowned sculpture created by the French artist Auguste Rodin in 1880. This bronze statue depicts a nude male figure seated on a rock, deeply immersed in thought, with his chin resting on his hand. The sculpture is a symbol of contemplation, representing the power of human intellect and the struggles of the creative mind. Rodin's masterpiece captures the tension between the physical and intellectual realms and has become an emblematic representation of philosophical introspection.",
      price: 7500000,
      age: 143,
      author: 5,
      type: "sculpture",
      images: ["thinker1.jpg", "thinker2.jpg"],
    },
    {
      id: 7,
      name: "Pieta",
      description:
        "Created between 1498 and 1499, this masterpiece depicts the body of Jesus Christ in the arms of his grieving mother, Mary. The sculpture showcases Michelangelo's extraordinary talent in conveying a sense of profound sorrow and tenderness through the smooth marble. The delicate details and intricate folds of the drapery further enhance the emotional impact of the scene. The 'Pieta' is housed in St. Peter's Basilica in Vatican City and stands as a testament to Michelangelo's skill in capturing the depth of human emotion and his ability to transform stone into a deeply moving work of art.",
      price: 10000000,
      age: 523,
      author: 2,
      type: "sculpture",
      images: ["pieta.jpg", "pieta2.jpg"],
    },
    {
      id: 8,
      name: "Study of Hands",
      description:
        "'Study of Hands' by Leonardo da Vinci is a remarkable pencil drawing that showcases the artist's skill in capturing intricate details and the human anatomy with precision and sensitivity.",
      price: 1000000,
      age: 545,
      author: 1,
      type: "other",
      images: ["hands1.jpg", "hands2.jpg"],
    },
    {
      id: 9,
      name: "Praying Hands",
      description:
        "Created in 1508, 'Praying Hands' is a famous pencil drawing by Albrecht Dürer. This work depicts a pair of hands folded in prayer, expressing devotion and spirituality. The drawing showcases Dürer's remarkable skill in capturing intricate details, textures, and the play of light and shadow.",
      price: 2000000,
      age: 513,
      author: 6,
      type: "other",
      images: ["prayingHands1.jpg"],
    },
    {
      id: 10,
      name: "Young Hare",
      description:
        "'Young Hare' is another renowned pencil drawing by Albrecht Dürer, executed in 1502. This remarkable work depicts a lifelike portrayal of a hare, capturing its fur, whiskers, and alert expression. Dürer's meticulous attention to detail and his ability to convey texture and form through pencil strokes make this drawing a testament to his technical brilliance. ",
      price: 5000000,
      age: 519,
      author: 6,
      type: "other",
      images: ["hare.jpg", "hare2.jpg"],
    },
  ],
  artists: [
    {
      id: 1,
      name: "Leonardo da Vinci",
      picture: "davinki.jpg",
      artworks: "licensed-image.pdf",
      description:
        "Leonardo da Vinci, a Renaissance polymath, excelled in painting, sculpture, architecture, and engineering. Renowned for masterpieces like the 'Mona Lisa' and 'The Last Supper', he blended exquisite detail with depth and intrigue. A visionary inventor and scientist, da Vinci's diverse interests in flying machines, anatomy, and science further solidify his status as a symbol of boundless creativity and intellect.",
    },
    {
      id: 2,
      name: "Michelangelo",
      picture: "mikelandjelo.jpg",
      artworks: "licensed-image.pdf",
      description:
        "Michelangelo, a Renaissance sculptor, painter, and architect, was a master of his craft. Known for his monumental sculptures like 'David' and 'Pieta,' his work showcased extraordinary skill in capturing human anatomy and expressing power and grace. His artistic genius extended to fresco painting, notably with the awe-inspiring Sistine Chapel ceiling. Michelangelo's legacy continues to inspire audiences worldwide.",
    },
    {
      id: 3,
      name: "Calude Monet",
      picture: "mone.jpg",
      artworks: "licensed-image.pdf",
      description:
        "Claude Monet, a renowned Impressionist painter of the late 19th and early 20th centuries, was a pioneer in capturing the fleeting beauty of light and nature. Through his distinctive brushwork and emphasis on the play of light and color, Monet sought to convey his impressions of a scene rather than strict realism. His iconic series, such as 'Water Lilies' and 'Rouen Cathedral,' showcase his ability to capture the essence of a subject through his mastery of atmospheric effects and capturing the ever-changing qualities of nature. Monet's innovative approach to painting continues to inspire artists and art lovers alike, leaving an indelible mark on the art world.",
    },
    {
      id: 4,
      name: "Van Gogh",
      picture: "gog.jpg",
      artworks: "licensed-image.pdf",
      description:
        "Van Gogh, a visionary artist of the late 19th century, created mesmerizing works that continue to captivate audiences. With his distinctive style characterized by vibrant colors and bold brushstrokes, Van Gogh expressed his inner emotions and unique perception of the world. His masterpieces, such as 'Starry Night' and 'Sunflowers,' reveal a profound sense of beauty and evoke a range of emotions. Van Gogh's artistic journey was marked by struggle, but his legacy as a pioneering artist remains influential, inspiring generations to appreciate the power of art to convey deep emotions.",
    },
    {
      id: 5,
      name: "Auguste Rodin",
      picture: "rodin.jpg",
      artworks: "licensed-image.pdf",
      description:
        "Auguste Rodin, a French sculptor of the late 19th and early 20th centuries, was a master of capturing human emotion and the beauty of the human form. Renowned for his groundbreaking work, such as 'The Thinker' and 'The Kiss,' Rodin's sculptures are characterized by their intense realism and raw emotional power. With his innovative techniques and attention to detail, he brought a new level of expressiveness to his art. Rodin's ability to convey complex feelings and explore the depths of the human psyche continues to resonate with audiences, making him one of the most influential sculptors in history.",
    },
    {
      id: 6,
      name: "Albrecht Dürer",
      picture: "direr.jpg",
      artworks: "licensed-image.pdf",
      description:
        "Albrecht Dürer, a renowned artist of the Renaissance, was a master of various mediums, including painting, printmaking, and engraving. Known for his meticulous attention to detail, technical skill, and innovative approach, Dürer's works captured the essence of his subjects with striking realism and depth. His artistry and influence continue to resonate, solidifying his status as one of the most significant artists of his time.",
    },
  ],
};
