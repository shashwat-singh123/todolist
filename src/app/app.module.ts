import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TodoService } from "./todo.service";

import { AppComponent } from "./app.component";
import { UserComponent } from "./components/user/user.component";
import { TodosComponent } from "./todos/todos.component";

@NgModule({
  declarations: [AppComponent, UserComponent, TodosComponent],
  imports: [BrowserModule, FormsModule],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
