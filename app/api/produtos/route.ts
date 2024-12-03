export interface Produto {
    id: number;
    nome: string;
    preco: number;
  }
  
  const produtos = [
    { id: 1, nome: 'tshirt', preco: 20.5 },
    {id: 2, nome: 'caneca', preco: 7 },
  ];
  
  
  export async function GET() {
    return Response.json(produtos, { status: 200 });  // Retorna os produtos no formato JSON
  }