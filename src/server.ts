import { randCatchPhrase, randVerb } from "@ngneat/falso";
import { Factory, Model, createServer } from "miragejs";

export const makeServer = ({ environment = "development" }) => {
  return createServer({
    environment,
    models: {
      task: Model,
    },
    factories: {
      task: Factory.extend({
        title: () => `${randVerb()} ${randCatchPhrase().toLowerCase()}`,
      }),
    },
    routes() {
      this.timing = 1000;
      this.namespace = "api";

      this.get("/tasks");
    },

    seeds(server) {
      server.createList("task", 10);
    },
  });
};
