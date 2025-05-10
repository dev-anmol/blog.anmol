import {Component, inject, signal} from '@angular/core';
import {NgSelectModule} from '@ng-select/ng-select';
import {FormsModule} from '@angular/forms';
import {CreateBlogService} from '../../services/createBlog/create-blog.service';

@Component({
  selector: 'app-create-blog',
  imports: [NgSelectModule, FormsModule],
  templateUrl: './create-blog.component.html',
  styleUrl: './create-blog.component.css'
})
export class CreateBlogComponent {

  private createBlog = inject(CreateBlogService);
  title = signal('');
  description = signal('');
  content = signal('');
  image = signal('');
  category = signal('');
  author = signal('');
  tags = signal([]);
  dataOfPublish = signal('');

  availableTags = [
    {name: 'Tech'},
    {name: 'Angular'},
    {name: 'Life'},
    {name: 'Health'}
  ]
  selectedTags: any[] = [];

  addTagFn(name: string) {
    return {name: name};
  }

  setTitle(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    this.title.set(value);
  }

  setDescription(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    this.description.set(value);
  }

  setContent(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    this.content.set(value);
  }

  setImagePath(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    this.image.set(value);
  }

  setCategory(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    this.category.set(value);
  }

  setAuthor(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    this.author.set(value);
  }

  updateTags() {
    // Extract tag names from selected tags objects and update the tags signal
    const tagNames: any = this.selectedTags.map(tag => tag.name);
    this.tags.set(tagNames);
    console.log('Updated tags:', this.tags());
  }

  submit() {
    console.log("here")
    const blogData = {
      title: this.title(),
      description: this.description(),
      content: this.content(),
      image: this.image(),
      category: this.category(),
      author: this.author(),
      tags: this.tags(),
      dataOfPublish : new Date(),
    };
    this.createBlog.createBlog(blogData);
  }


}
