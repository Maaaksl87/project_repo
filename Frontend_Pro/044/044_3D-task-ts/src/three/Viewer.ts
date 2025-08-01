import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { GeometryTypes } from '../models/GeometryTypes';

// Інтерфейс для фігури
interface IFigure {
  id: string;
  geometryType: GeometryTypes;
  size: number;
  color: string | number;
}

// Інтерфейс для користувацьких даних меша
interface IMeshUserData {
  meshID: string;
}

export class Viewer {
  private canvas: HTMLElement;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private controls: OrbitControls;
  private drawnFiguresUUIDs: string[];

  constructor(canvasId: string) {
    const canvasElement = document.getElementById(canvasId);
    if (!canvasElement) {
      throw new Error(`Canvas with id "${canvasId}" not found`);
    }
    
    this.canvas = canvasElement;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera();
    this.renderer = new THREE.WebGLRenderer();
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.drawnFiguresUUIDs = [];

    this.init();
    this.animate();
  }

  private init(): void {
    this.scene.background = new THREE.Color(0x434343);
    
    this.camera = new THREE.PerspectiveCamera(
      70, 
      this.canvas.clientWidth / this.canvas.clientHeight, 
      1, 
      1000
    );
    this.camera.position.z = 20;

    this.renderer = new THREE.WebGLRenderer({ 
      canvas: this.canvas as HTMLCanvasElement, 
      antialias: true 
    });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    const hemisphereLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 0.7);
    hemisphereLight.position.set(2.5, 10, 5);
    this.scene.add(hemisphereLight);

    this.scene.add(new THREE.AmbientLight(0x404040));

    window.addEventListener('resize', () => {
      this.onResizeWindow();
    });
  }

  private onResizeWindow(): void {
    this.camera.aspect = this.canvas.clientWidth / this.canvas.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
  }

  private animate(): void {
    requestAnimationFrame(this.animate.bind(this));
    this.renderer.render(this.scene, this.camera);
    this.controls.update();
  }

  public draw(figure: IFigure): void {
    let geometry: THREE.BufferGeometry;

    switch(figure.geometryType) {
      case GeometryTypes.BOX:
        geometry = new THREE.BoxGeometry(figure.size, figure.size, figure.size);
        break;

      case GeometryTypes.SPHERE:
        geometry = new THREE.SphereGeometry(figure.size);
        break;

      case GeometryTypes.CYLINDER:
        geometry = new THREE.CylinderGeometry(
          figure.size, 
          figure.size, 
          this.getRandomNumber(1, 5)
        );
        break;

      default:
        throw new Error(`Unknown geometry type: ${figure.geometryType}`);
    }

    const mesh = new THREE.Mesh(
      geometry, 
      new THREE.MeshPhongMaterial({ color: figure.color })
    );
    
    mesh.position.set(
      this.getRandomNumber(-5, 5),
      this.getRandomNumber(-2.5, 2.5),
      this.getRandomNumber(-5, 5)
    );
    
    mesh.userData = { meshID: figure.id } as IMeshUserData;
    this.scene.add(mesh);
    this.drawnFiguresUUIDs.push(figure.id);
  }

  public removeFigure(figureId: string): void {
    const meshToRemove = this.scene.children.find(child => 
      (child as THREE.Mesh).userData && 
      (child as THREE.Mesh).userData.meshID === figureId
    ) as THREE.Mesh | undefined;

    if (meshToRemove) {
      this.scene.remove(meshToRemove);
      // Видаляємо ID з масиву
      const index = this.drawnFiguresUUIDs.indexOf(figureId);
      if (index > -1) {
        this.drawnFiguresUUIDs.splice(index, 1);
      }
    }
  }

  public clearScene(): void {
    
    const meshesToRemove = this.scene.children.filter(child => 
      (child as THREE.Mesh).userData && 
      (child as THREE.Mesh).userData.meshID
    );
    
    meshesToRemove.forEach(mesh => {
      this.scene.remove(mesh);
    });
    
    this.drawnFiguresUUIDs = [];
  }

  private getRandomNumber(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  // Геттери для доступу до приватних властивостей
  public getScene(): THREE.Scene {
    return this.scene;
  }

  public getCamera(): THREE.PerspectiveCamera {
    return this.camera;
  }

  public getRenderer(): THREE.WebGLRenderer {
    return this.renderer;
  }

  public getDrawnFiguresUUIDs(): string[] {
    return [...this.drawnFiguresUUIDs]; 
  }
} 