export interface Produto {
    id: number;
    nome: string;
    preco: number;
    descricao: string;
    imageURL?: string;
    promo?: boolean;
    categoria?: string;
    estado?: 'novo' | 'usado' | 'esgotado';
}
