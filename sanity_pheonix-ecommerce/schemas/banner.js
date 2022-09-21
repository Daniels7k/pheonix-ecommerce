export default {
    name: 'banner',
    title: 'Banner',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Imagens',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'buttonText',
            title: 'Texto do botão',
            type: 'string',
        },
        {
            name: 'product',
            title: 'Slug do Produto',
            type: 'string',
        },
        {
            name: 'desc',
            title: 'Descrição',
            type: 'string',
        },
        {
            name: 'smallText',
            title: 'Texto Pequeno',
            type: 'string',
        },
        {
            name: 'midText',
            title: 'Texto do meio',
            type: 'string',
        },
        {
            name: 'largeText1',
            title: 'Texto grande',
            type: 'string',
        },
        {
            name: 'largeText2',
            title: 'Texto grande 2',
            type: 'string',
        },
        {
            name: 'discount',
            title: 'Desconto',
            type: 'string',
        },
        {
            name: 'saleTime',
            title: 'A promoção acaba em',
            type: 'string',
        },
    ],
};