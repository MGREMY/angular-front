import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncatePipe',
})
export class TruncatePipeTransform implements PipeTransform {
  transform(value: string, ...args: unknown[]) {
    const limit = args.length > 0 ? parseInt(args[0] as string, 10) : 20;
    const trail = args.length > 1 ? args[1] : '...';

    return value.length > limit ? value.substring(0, limit) + trail : value;
  }
}
