import { ChatOpenAI } from "@langchain/openai";
import { createJsonAgent, JsonToolkit } from "langchain/agents";
import { JsonSpec, JsonObject } from "langchain/tools"; // Add JsonObject import
import { JSONData } from "../constants/constants";

const data= new JsonSpec(JSONData as any); // Cast JSONData as JsonObject
const toolkit = new JsonToolkit(data); // Create a toolkit for the data
 