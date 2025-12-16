<script lang="ts">
  import { onMount } from 'svelte';
  import * as THREE from 'three';

  // Explicitly type the container variable
  let canvasContainer: HTMLDivElement;

  onMount(() => {
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0f172a, 0.002); 

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 1000;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    // Check if container exists before appending (TypeScript safety)
    if (canvasContainer) {
      canvasContainer.appendChild(renderer.domElement);
    }

    const geometry = new THREE.BufferGeometry();
    const particles: number[] = [];
    
    for (let i = 0; i < 600; i++) {
      particles.push(
        Math.random() * 2000 - 1000,
        Math.random() * 2000 - 1000,
        Math.random() * 2000 - 1000
      );
    }
    
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(particles, 3));
    const material = new THREE.PointsMaterial({ color: 0xc0a062, size: 2.5 });
    const pointCloud = new THREE.Points(geometry, material);
    scene.add(pointCloud);

    function animate() {
      requestAnimationFrame(animate);
      pointCloud.rotation.x += 0.0003;
      pointCloud.rotation.y += 0.0005;
      renderer.render(scene, camera);
    }
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });
</script>

<div bind:this={canvasContainer} class="three-bg"></div>

<style>
  .three-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.5;
    pointer-events: none;
  }
</style>