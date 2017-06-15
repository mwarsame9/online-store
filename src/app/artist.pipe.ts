import { Pipe, PipeTransform } from '@angular/core';
import { Album } from './album.model';

@Pipe({
  name: 'artist'
})
export class ArtistPipe implements PipeTransform {

  transform(input: Album[], desire) {
    var output: Album[] = [];
   if(desire === "jimiHendrix") {
     for (var i = 0; i < input.length; i++) {
       if (input[i].artist === "Jimi Hendrix") {
         output.push(input[i]);
       }
     }
     return output;
   } else if (desire === "pinkFloyd") {
     for (var i = 0; i < input.length; i++) {
       if (input[i].artist === "Pink Floyd") {
         output.push(input[i]);
       }
     }
     return output;
   } else if (desire === "others") {
     for (var i = 0; i < input.length; i++) {
       if (input[i].artist != "Pink Floyd" || input[i].artist != "Jimi Hendrix") {
         output.push(input[i]);
       }
     }
     return output;
   } else {
     return input;
   }
 }
}
