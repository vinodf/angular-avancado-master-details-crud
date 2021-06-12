import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Category } from "./pages/categories/shared/category.model";

export class InMemoryDatabase implements InMemoryDbService {
  createDb(){
    const categories: Category[] = [
      { id: 1, name: "Moradia", description: "Pagamentos de Conta da Casa"},
      { id: 2, name: "Saúde", description: "Plano de Saúde e remédios"},
      { id: 3, name: "Lazer", description: "Cinema, parques, praias, etc"},
      { id: 4, name: "Salário", description: "Recebimento de Salário"},
      { id: 5, name: "Freelas", description: "Trabalhos como freelancer"}
    ];

    return { categories };
  }
}
