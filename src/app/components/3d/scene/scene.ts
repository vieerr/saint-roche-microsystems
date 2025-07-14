// // scene.component.ts
// import { Component } from '@angular/core';
// import { NgtCanvas } from '@angular-three/core';
// import { NgtBoxGeometry, NgtMeshBasicMaterial, NgtMesh } from '@angular-three/core/meshes';

// @Component({
//   selector: 'app-scene',
//   standalone: true,
//   template: `
//     <ngt-canvas>
//       <ngt-mesh (animateReady)="onAnimate($event)">
//         <ngt-box-geometry></ngt-box-geometry>
//         <ngt-mesh-basic-material color="green"></ngt-mesh-basic-material>
//       </ngt-mesh>
//     </ngt-canvas>
//   `,
//   imports: [NgtCanvas, NgtBoxGeometry, NgtMeshBasicMaterial, NgtMesh]
// })
// export class SceneComponent {
//   onAnimate({ object, state: { clock } }: { object: THREE.Mesh; state: { clock: THREE.Clock } }) {
//     object.rotation.x = clock.getElapsedTime();
//     object.rotation.y = clock.getElapsedTime();
//   }
// }