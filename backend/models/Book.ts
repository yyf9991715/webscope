
import { Double } from 'mongodb';
import { StringLiteralLike } from 'typescript';

interface Book{
    id:String;
    title:String;
    author:String;
    price:StringLiteralLike;
    link:String;
    ISBN:String;
}