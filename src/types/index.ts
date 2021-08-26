export type User = {
    id: string;
    name:string;
    avatar:string;
} | null;
  
export type QuestionType = {
    id:string,
    author:{
        name: string,
        avatar: string
    }
    content: string,
    isAnswered:boolean,
    isHighlighted: boolean,
    likeCount: number,
    likeId : string | undefined
};

export type RoomType = {
    authorId : string,
    question: QuestionType[],
    title: string
}

export type FirebaseQuestions = Record<string, {
    author: {
        name: string,
        avatar: string
    },
    content:string,
    isAnswered: boolean,
    isHighlighted: boolean,
    likes: Record<string,{
        authorId:string
    }>
}>;