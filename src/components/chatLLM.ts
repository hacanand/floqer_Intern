// import dotenv from "dotenv";
// import { OpenAI, OpenAIEmbeddings } from "@langchain/openai";
// import { JSONLoader } from "langchain/document_loaders/fs/json";
// import { FaissStore } from "@langchain/community/vectorstores/faiss";

// import {
//   RetrievalQAChain,
   
//   loadQAStuffChain,
// } from "langchain/chains";
// import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
 
// export class Langchain_JSON {
//   private model: OpenAI;
//   constructor() {
//     this.model = new OpenAI({
//       temperature: 0.5,
//       modelName: "gpt-3.5-turbo",
//         streaming: true,
//       apiKey:process.env.REACT_APP_OPENAI_API_KEY ,
   
//     });
//   }
//   async processJSONVectorStore() {
//     const jsonLoader = new JSONLoader('./csvjson.json');
//     const json = await jsonLoader.load();
//     const splitter = new RecursiveCharacterTextSplitter({
//       chunkSize: 2000,
//       chunkOverlap: 50,
//     });
//     const documents = await  splitter.createDocuments(json as any);
//     const embaddings = new OpenAIEmbeddings();
//     const vectorsStore = await FaissStore.fromDocuments(documents, embaddings);
//       await vectorsStore.save("./vector_store");
//       console.log("Saved vector store");
//   }
//   async useFaissVectorStore(question: string) {
//     const embaddings = new OpenAIEmbeddings();
//       const vectorsStore = await FaissStore.load("./vector_store", embaddings);
      
//     const chain = new RetrievalQAChain({
//       combineDocumentsChain: loadQAStuffChain(this.model),
//       retriever: vectorsStore.asRetriever(),
//         returnSourceDocuments: true,
//       verbose: false,
//     });
//       const res = await chain.call({
//           query: question,
//       });
//         console.log(res);
//   }
// }



// import { HNSWLib } from "@langchain/community/vectorstores/hnswlib";
// import { OpenAI, OpenAIEmbeddings } from "@langchain/openai";
// import fs from "fs";
// import { VectorDBQAChain } from "langchain/chains";
// import { createRetrievalChain } from "langchain/chains/retrieval";
// import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

// export const run = async () => {
//     const model = new OpenAI({
//         temperature: 0.5,
//         modelName: "gpt-3.5-turbo",
//         streaming: true,
//         apiKey: process.env.REACT_APP_OPENAI_API_KEY ,
//     });
//     const text = fs.readFileSync('./csvjson.json', 'utf8');
//     const textSplitter = new RecursiveCharacterTextSplitter({
//         chunkSize: 2000,
//     });
//     const docs = await textSplitter.createDocuments([text]);
//     const vectorsStore = await HNSWLib.fromDocuments(docs, new OpenAIEmbeddings());
//     const chain = createRetrievalChain({
//         retriever: vectorsStore.asRetriever(),
//         combineDocsChain: [],
//     })
//     const res = await chain.call({
//         query: "What is the job market for ML?",
//         input_documents: docs,
//     });
//     console.log(res);
// }