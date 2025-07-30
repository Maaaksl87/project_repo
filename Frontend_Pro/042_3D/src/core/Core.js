import {Form} from '../client/Form';
import {FigureList} from '../client/FigureList';
import {FigureViewModelService} from '../services/FigureViewModelService';
import {figureApiService} from '../api/FigureApiService';
import {Viewer} from "../three/Viewer";
import {GeometryTypes} from "../models/GeometryTypes";

export class Core {
  constructor () {
    this.viewerCanvas = document.createElement("canvas");
    this.viewerCanvas.id = "viewerRoot";
    const root = document.getElementById("root");

    this.formController = new Form();
    this.formController.onCreate(this.onCreateHandler.bind(this));
    this.formController.onFilter(this.onFilterHandler.bind(this));

    this.figureListController = new FigureList(this.onDeleteHandler.bind(this));

    this.figureViewModelService = new FigureViewModelService();

    this.viewModels = [];

    root.append(
      this.formController.getFormElement(),
      this.viewerCanvas,
      this.figureListController.figureList
    );

    this.viewerController = new Viewer(this.viewerCanvas.id);
    this.viewerController.init();
  }

  async start() {
    const figuresData = await figureApiService.getFiguresData();

    figuresData.forEach(figureData => {
      const viewModel = this.figureViewModelService.toViewModel(figureData);
      this.viewModels.push(viewModel);
      this.viewerController.draw(viewModel);
    });

    this.figureListController.updateList(this.viewModels);
  }
  
  // Хендлер для створення фігури
  onCreateHandler(formData) {
    const figureViewModel = this.figureViewModelService.toViewModel(formData);
    figureApiService.addFigureData(figureViewModel);
    this.viewModels.push(figureViewModel);
    this.figureListController.updateList(this.viewModels);
    this.viewerController.draw(figureViewModel);
  }

  // Хендлер для видалення фігури
  onDeleteHandler(id) {
    figureApiService.removeFigureData(id);
    this.viewerController.removeFigure(id);
    this.viewModels.splice(this.viewModels.findIndex(vm => vm.id === id), 1);
    this.figureListController.updateList(this.viewModels);
  }

  // Хендлер для фільтрації
  onFilterHandler(selectedType, filterScene) {
    this.currentFilter = selectedType;
    this.currentFilterScene = filterScene;
    this.updateFilteredView();
  }
  
  updateFilteredView() {
    // Фільтруємо фігури
    const filteredFigures = this.currentFilter === "" 
      ? this.viewModels 
      : this.viewModels.filter(figure => {
          const geometryTypeKey = Object.keys(GeometryTypes).find(key => 
            GeometryTypes[key] === figure.geometryType
          );
          return geometryTypeKey === this.currentFilter;
        });
    
    // Оновлюємо список
    this.figureListController.updateList(filteredFigures);
    
    // Керуємо відображенням на 3D сцені
    if (this.currentFilterScene) {
      // Якщо галочка поставлена - показуємо тільки відфільтровані фігури
      this.viewerController.clearScene();
      filteredFigures.forEach(figure => {
        this.viewerController.draw(figure);
      });
    } else {
      // Якщо галочка знята - показуємо всі фігури
      this.viewerController.clearScene();
      this.viewModels.forEach(figure => {
        this.viewerController.draw(figure);
      });
    }
  }
}