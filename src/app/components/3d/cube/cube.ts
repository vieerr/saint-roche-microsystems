// import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, signal } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { NgtCanvas, NgtArgs, extend, injectBeforeRender, NGT_STORE } from 'angular-three';
// import * as THREE from 'three';
// import { OrbitControls } from 'three-stdlib';

// // Extend THREE.js and OrbitControls
// extend(THREE, { OrbitControls });

// @Component({
//   selector: 'app-cube',
//   standalone: true,
//   template: `
//     <ngt-mesh 
//       (pointerover)="hovered.set(true)" 
//       (pointerout)="hovered.set(false)"
//     >
//       <ngt-box-geometry />
//       <ngt-mesh-standard-material [color]="hovered() ? 'hotpink' : 'orange'" />
//     </ngt-mesh>
//   `,
//   schemas: [CUSTOM_ELEMENTS_SCHEMA],
// })
// export class Cube {
//   hovered = signal(false);

//   constructor() {
//     injectBeforeRender(({ delta }) => {
//       // Rotate the cube automatically
//       this.mesh.rotation.x += delta;
//       this.mesh.rotation.y += delta;
//     });
//   }

//   private mesh: THREE.Mesh = inject(ngtme) as THREE.Mesh;

// }

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [CommonModule, NgtCanvas, NgtArgs],
//   template: `
//     <ngt-canvas [sceneGraph]="Scene" />
//     <ng-template #Scene>
//       <ngt-ambient-light [intensity]="0.5" />
//       <ngt-spot-light [position]="[10, 10, 10]" [angle]="0.15" [penumbra]="1" />
//       <ngt-point-light [position]="[-10, -10, -10]" />
      
//       <app-cube />
      
//       <ngt-orbit-controls *args="[camera(), glDomElement()]" />
//     </ng-template>
//   `,
//   styles: [`
//     :host {
//       display: block;
//       height: 100vh;
//       width: 100vw;
//     }
//   `],
//   schemas: [CUSTOM_ELEMENTS_SCHEMA],
// })
// export class App {
//   protected readonly Scene = Scene;

//   private store = inject(NGT_STORE);
//   protected camera = this.store.select('camera');
//   protected glDomElement = this.store.select('gl', 'domElement');
// }

// // Simple scene component
// @Component({
//   standalone: true,
//   template: `<ng-content />`,
// })
// class Scene {}