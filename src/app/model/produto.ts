export interface Produto {
    id: number;
    nome: string;
    preco: number;
    descricao: string;
    imageURL?: string;
    promo?: boolean;
    estado?: 'novo' | 'usado' | 'esgotado';
}
