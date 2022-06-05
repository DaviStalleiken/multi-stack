export interface Pet {
    id: number;
    nome: string;
    historia: string;
    foto: string; //É uma string porque será o endereço da imagem, não o arquivo em si
}