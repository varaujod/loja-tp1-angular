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

const estados = ['novo', "usado", "esgotado"] as const;

export class ProdutoMapper {
    static fromJson(json: any) : Produto{
        let _estado = estados[Math.floor(Math.random() * estados.length)];
        
        return{
            id: json.id,
            nome: json.title,
            preco: json.price,
            descricao: json.description,
            imageURL: json.image,
            categoria: json.category,
            estado: _estado,
            promo: json.id % 5 == 0 && _estado != 'esgotado'
        };
    }

    static toJson(prod: Produto) : any{
        return {
            id: prod.id,
            title: prod.nome,
            price: prod.preco,
            description: prod.descricao,
            image: prod.imageURL,
            category: 'general'
        }
    }
}
