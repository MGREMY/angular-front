import { Component, resource } from '@angular/core';

@Component({
  selector: 'app-landing',
  template: `
    <div class="m-2 flex flex-col gap-6 text-black dark:text-white">
      <h1 class="text-4xl font-bold">Angular front</h1>
      <div class="flex flex-col gap-2">
        <h2 class="text-2xl font-bold">What is this project about ?</h2>
        <p>
          The purpose of this project is to provide a ready to use angular
          application and .NET api.
        </p>
        <p>
          This project use several libraries, the main one being
          <a class="cursor-pointer" href="https://flowbite-angular.com">
            <span class="italic text-primary-500">flowbite-angular</span></a
          >, a component library based on
          <a class="cursor-pointer" href="https://flowbite.com">
            <span class="italic text-primary-500">flowbite</span></a
          >
          and
          <a class="cursor-pointer" href="https://tailwindcss.com/">
            <span class="italic text-primary-500">TailwindCSS</span></a
          >. It also uses
          <a class="cursor-pointer" href="https://nx.dev/recipes/angular">
            <span class="italic text-primary-500">NX</span>
          </a>
          as a monorepo manager.
        </p>
        <p>
          This starter project have to be used in pair with
          <a class="cursor-pointer" href="https://github.com/MGREMY/DotnetApi">
            <span class="italic text-primary-500">DotnetApi</span></a
          >, one of my other repository. The API is also a starter project for
          anyone who wants to create a new .NET minimal API with some
          authentification (using
          <a class="cursor-pointer" href="https://auth0.com/">
            <span class="italic text-primary-500">auth0</span></a
          >), logging (using
          <a class="cursor-pointer" href="https://datalust.co/">
            <span class="italic text-primary-500">Seq</span></a
          >,
          <a class="cursor-pointer" href="https://serilog.net/">
            <span class="italic text-primary-500">Serilog</span></a
          >) and database connection with
          <a
            class="cursor-pointer"
            href="https://learn.microsoft.com/en-us/ef/core/">
            <span class="italic text-primary-500">EF Core</span></a
          >.
        </p>
      </div>
      <div class="flex flex-col gap-3">
        <h2 class="text-2xl font-bold">List of dependencies :</h2>
        <span>
          Here is the complete list of the dependencies used in this project.
        </span>
        <div class="flex flex-col">
          @if(dependenciesResource.isLoading()){
          <div
            class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
            role="status">
            <span
              class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
          } @else if(dependenciesResource.error()){
          <p class="text-red-500 font-bold">
            Error while fetching the github content url.
          </p>
          } @else if(dependenciesResource.value()) {
          <div class="flex flex-row gap-4">
            <table
              class="table-auto basis-1/2 w-full h-fit border border-gray-300">
              <caption class="caption-top font-bold">
                Dependencies
              </caption>
              <thead class="bg-slate-200">
                <tr>
                  <th class="border border-gray-300 px-4 py-2">Name</th>
                  <th class="border border-gray-300 px-4 py-2">Version</th>
                </tr>
              </thead>
              <tbody class="text-center">
                @for (item of dependenciesResource.value()?.dependencies; track
                $index) {
                <tr>
                  <td class="border border-gray-300 px-4 py-2">
                    {{ item[0] }}
                  </td>
                  <td class="border border-gray-300 px-4 py-2">
                    {{ item[1] }}
                  </td>
                </tr>
                }
              </tbody>
            </table>
            <table
              class="table-auto basis-1/2 w-full h-fit border border-gray-300">
              <caption class="caption-top font-bold">
                DevDependencies
              </caption>
              <thead class="bg-slate-200">
                <tr>
                  <th class="border border-gray-300 px-4 py-2">Name</th>
                  <th class="border border-gray-300 px-4 py-2">Version</th>
                </tr>
              </thead>
              <tbody class="text-center">
                @for (item of dependenciesResource.value()?.devDependencies;
                track $index) {
                <tr>
                  <td class="border border-gray-300 px-4 py-2">
                    {{ item[0] }}
                  </td>
                  <td class="border border-gray-300 px-4 py-2">
                    {{ item[1] }}
                  </td>
                </tr>
                }
              </tbody>
            </table>
          </div>
          }
        </div>
      </div>
    </div>
  `,
})
export class LandingComponent {
  protected readonly dependenciesResource = resource({
    loader: ({ abortSignal }) =>
      fetch(
        'https://raw.githubusercontent.com/MGREMY/angular-front/refs/heads/main/package.json',
        {
          method: 'GET',
          signal: abortSignal,
        }
      )
        .then((response) => response.json())
        .then((response) => {
          const dependencies = Object.entries(response.dependencies);
          const devDependencies = Object.entries(response.devDependencies);

          return { dependencies, devDependencies };
        }),
  });
}
