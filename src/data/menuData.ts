export interface MenuItem {
  name: string;
  price: number;
  note?: string;
}

export interface MenuCategory {
  title: string;
  icon: string;
  items: MenuItem[];
}

export const highlight = {
  title: "Espetinho de Picanha",
  price: 20.00,
};

export const pixInfo = {
  phone: "62 99223-6149",
  name: "Bruna Batista Costa",
};

export const whatsappNumber = "5562992236149";

export const menuCategories: MenuCategory[] = [
  {
    title: "Espetinhos",
    icon: "🔥",
    items: [
      { name: "Espetinho de Picanha", price: 20.00, note: "" },
      { name: "Espetinho de Contra Filé", price: 15.00 },
      { name: "Espetinho de Kafta", price: 16.00 },
      { name: "Espetinho de Cupim", price: 15.00 },
    ],
  },
  {
    title: "Espetinhos de Frango",
    icon: "🍗",
    items: [
      
      { name: "Espetinho Múmia de Frango", price: 18.00, note: "Filé de frango recheado com queijo provolone e enrolado com bacon" },
      { name: "Espetinho de Frango", price: 14.00 },
      { name: "Espetinho de Frango com bacon", price: 14.00 },
      { name: "Espetinho de Sobrecoxa desossada", price: 14.00 },
      { name: "Espetinho Asinha de Frango", price: 14.00 },
    ],
  },
  {
    title: "Suíno",
    icon: "🥩",
    items: [
      { name: "Espetinho de Linguiça", price: 14.00 },
       { name: "Espetinho de Linguiça Suína Apimentada", price: 14.00, note: "" },
    ],
  },
  {
    title: "Queijos",
    icon: "🧀",
    items: [
      { name: "Espetinho de Queijo Coalho", price: 14.00 },
      { name: "Espetinho de Queijo Provolone", price: 14.00 },
      { name: "Pão de Alho", price: 10.00 },
    ],
  },
  {
    title: "Jantinha",
    icon: "🍽️",
    items: [
      { name: "Arroz, Feijão Tropeiro, Mandioca cozida, Salada Gourmet de Repolho", price: 14.00 },
      ,
    ],
  },
  {
  
    title: "Porções",
    icon: "🍟",
    items: [
      { name: "Porção de Arroz", price: 10.00 },
      { name: "Porção de Feijão Tropeiro", price: 13.00 },
      { name: "Porção de Mandioca Cozida", price: 11.00 },
      { name: "Porção Salada Gourmet de Repolho", price: 10.00 },
      { name: "Batata Frita - 400g", price: 32.00 },
      { name: "Batata Frita - 200g", price: 18.00 },
    ],
  },
  {
    title: "Sobremesas",
    icon: "🍫",
    items: [
      { name: "Espetinho Romeu e Julieta", price: 14.00 },
    ],
  },
  {
  title: "Menu Kids 🧒",
    icon: "🍽️",
    items: [
      { name: "Arroz, Feijão Tropeiro, Mandioca cozida, Salada Gourmet de Repolho", price: 9.00 },
      { name: "Porção de Arroz", price: 7.00 },
      { name: "Porção de Feijão Tropeiro", price: 10.00 },
      { name: "Porção de Mandioca Cozida", price: 7.00 },
      { name: "Porção de Salada Gourmet de Repolho", price: 7.00 },
    ],
  },
  {
    title: "Bebidas",
    icon: "🥤",
    items: [
      { name: "Coca-Cola Lata 350ml", price: 7.00 },
      { name: "Coca-Cola 600ml", price: 9.00 },
      { name: "Coca-Cola 1L", price: 11.00 },
      { name: "Coca-Cola 2L", price: 15.00 },
      { name: "Guaraná Lata 600ml", price: 7.00 },
      { name: "Pepsi Lata 350ml", price: 7.00 },
      { name: "H2O Limão 300ml", price: 8.00 },
      { name: "H2O Limoneto 300ml", price: 8.00 },
      { name: "Cerveja Heineken Long Neck 330ml", price: 11.00 },
      { name: "Cerveja Corona Long Neck", price: 11.00 },
      { name: "Energia Monster 473ml", price: 15.00 },
      { name: "Suco Natural de Laranja", price: 13.00 },
      { name: "Suco La Fruit Lata Maracujá", price: 7.00 },
      { name: "Suco La Fruit Lata Uva", price: 7.00 },
,
    ],
  },
];
