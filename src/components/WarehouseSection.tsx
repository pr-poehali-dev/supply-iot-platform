import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface Product {
  id: string;
  name: string;
  category: string;
  quantity: number;
  unit: string;
  warehouse: string;
  status: 'in-stock' | 'low-stock' | 'out-of-stock';
  price: number;
  lastUpdated: string;
}

const WarehouseSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterWarehouse, setFilterWarehouse] = useState('all');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [sortBy, setSortBy] = useState<'name' | 'quantity' | 'price'>('name');

  const [products, setProducts] = useState<Product[]>([
    {
      id: 'PRD-001',
      name: 'Металлопрокат листовой',
      category: 'Металлоизделия',
      quantity: 2400,
      unit: 'кг',
      warehouse: 'Склад А',
      status: 'in-stock',
      price: 85000,
      lastUpdated: '24.10.2025',
    },
    {
      id: 'PRD-002',
      name: 'Цемент М500',
      category: 'Стройматериалы',
      quantity: 150,
      unit: 'мешок',
      warehouse: 'Склад Б',
      status: 'low-stock',
      price: 420,
      lastUpdated: '23.10.2025',
    },
    {
      id: 'PRD-003',
      name: 'Кабель ВВГ 3x2.5',
      category: 'Электротовары',
      quantity: 5800,
      unit: 'м',
      warehouse: 'Склад А',
      status: 'in-stock',
      price: 125,
      lastUpdated: '24.10.2025',
    },
    {
      id: 'PRD-004',
      name: 'Труба ПНД 32мм',
      category: 'Сантехника',
      quantity: 0,
      unit: 'м',
      warehouse: 'Склад В',
      status: 'out-of-stock',
      price: 89,
      lastUpdated: '22.10.2025',
    },
    {
      id: 'PRD-005',
      name: 'Краска водоэмульсионная',
      category: 'Стройматериалы',
      quantity: 340,
      unit: 'л',
      warehouse: 'Склад Б',
      status: 'in-stock',
      price: 450,
      lastUpdated: '24.10.2025',
    },
    {
      id: 'PRD-006',
      name: 'Гипсокартон 12мм',
      category: 'Стройматериалы',
      quantity: 85,
      unit: 'лист',
      warehouse: 'Склад А',
      status: 'low-stock',
      price: 320,
      lastUpdated: '23.10.2025',
    },
  ]);

  const categories = ['all', 'Металлоизделия', 'Стройматериалы', 'Электротовары', 'Сантехника'];
  const warehouses = ['all', 'Склад А', 'Склад Б', 'Склад В'];

  const filteredProducts = products
    .filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.id.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = filterCategory === 'all' || product.category === filterCategory;
      const matchesWarehouse = filterWarehouse === 'all' || product.warehouse === filterWarehouse;
      return matchesSearch && matchesCategory && matchesWarehouse;
    })
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'quantity') return b.quantity - a.quantity;
      if (sortBy === 'price') return b.price - a.price;
      return 0;
    });

  const getStatusBadge = (status: Product['status']) => {
    switch (status) {
      case 'in-stock':
        return <Badge className="bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20">В наличии</Badge>;
      case 'low-stock':
        return <Badge className="bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20">Мало</Badge>;
      case 'out-of-stock':
        return <Badge className="bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20">Нет в наличии</Badge>;
    }
  };

  const totalValue = products.reduce((sum, p) => sum + (p.price * p.quantity), 0);
  const lowStockCount = products.filter(p => p.status === 'low-stock').length;
  const outOfStockCount = products.filter(p => p.status === 'out-of-stock').length;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Всего товаров
            </CardTitle>
            <Icon name="Package" className="text-blue-600" size={20} />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">{products.length}</div>
            <p className="text-xs text-muted-foreground mt-2">
              Позиций в базе
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Общая стоимость
            </CardTitle>
            <Icon name="DollarSign" className="text-green-600" size={20} />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">
              {(totalValue / 1000000).toFixed(1)}M ₽
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Складская стоимость
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Мало на складе
            </CardTitle>
            <Icon name="AlertTriangle" className="text-orange-600" size={20} />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">{lowStockCount}</div>
            <p className="text-xs text-muted-foreground mt-2">
              Требует заказа
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Нет в наличии
            </CardTitle>
            <Icon name="XCircle" className="text-red-600" size={20} />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">{outOfStockCount}</div>
            <p className="text-xs text-muted-foreground mt-2">
              Срочный заказ
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <CardTitle className="flex items-center gap-2">
              <Icon name="Package" size={20} className="text-primary" />
              Управление товарами
            </CardTitle>
            <Button onClick={() => setIsAddDialogOpen(true)}>
              <Icon name="Plus" size={16} className="mr-2" />
              Добавить товар
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
                <Input
                  placeholder="Поиск по названию или артикулу..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Категория" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все категории</SelectItem>
                {categories.slice(1).map((cat) => (
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={filterWarehouse} onValueChange={setFilterWarehouse}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Склад" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все склады</SelectItem>
                {warehouses.slice(1).map((wh) => (
                  <SelectItem key={wh} value={wh}>{wh}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={(value) => setSortBy(value as any)}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Сортировка" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">По названию</SelectItem>
                <SelectItem value="quantity">По количеству</SelectItem>
                <SelectItem value="price">По цене</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Артикул</TableHead>
                  <TableHead>Наименование</TableHead>
                  <TableHead>Категория</TableHead>
                  <TableHead>Количество</TableHead>
                  <TableHead>Склад</TableHead>
                  <TableHead>Цена за ед.</TableHead>
                  <TableHead>Статус</TableHead>
                  <TableHead>Обновлено</TableHead>
                  <TableHead className="text-right">Действия</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProducts.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={9} className="text-center py-8 text-muted-foreground">
                      <Icon name="Search" className="mx-auto mb-2" size={32} />
                      <p>Товары не найдены</p>
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredProducts.map((product) => (
                    <TableRow key={product.id} className="cursor-pointer" onClick={() => setSelectedProduct(product)}>
                      <TableCell className="font-mono text-sm">{product.id}</TableCell>
                      <TableCell className="font-medium">{product.name}</TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell>
                        <span className="font-medium">{product.quantity}</span> {product.unit}
                      </TableCell>
                      <TableCell>{product.warehouse}</TableCell>
                      <TableCell>{product.price.toLocaleString()} ₽</TableCell>
                      <TableCell>{getStatusBadge(product.status)}</TableCell>
                      <TableCell className="text-muted-foreground text-sm">{product.lastUpdated}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex gap-2 justify-end">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedProduct(product);
                            }}
                          >
                            <Icon name="Eye" size={16} />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                            }}
                          >
                            <Icon name="Edit" size={16} />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>

          <div className="flex items-center justify-between mt-4">
            <p className="text-sm text-muted-foreground">
              Показано {filteredProducts.length} из {products.length} товаров
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Icon name="Download" size={16} className="mr-2" />
                Экспорт
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="FileText" size={16} className="mr-2" />
                Отчет
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Icon name="Plus" className="text-primary" size={24} />
              Добавить товар
            </DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Наименование</Label>
              <Input id="name" placeholder="Введите название товара" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="article">Артикул</Label>
              <Input id="article" placeholder="PRD-XXX" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Категория</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите категорию" />
                </SelectTrigger>
                <SelectContent>
                  {categories.slice(1).map((cat) => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="warehouse">Склад</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите склад" />
                </SelectTrigger>
                <SelectContent>
                  {warehouses.slice(1).map((wh) => (
                    <SelectItem key={wh} value={wh}>{wh}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="quantity">Количество</Label>
              <Input id="quantity" type="number" placeholder="0" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="unit">Единица измерения</Label>
              <Input id="unit" placeholder="шт, кг, л, м" />
            </div>
            <div className="space-y-2 col-span-2">
              <Label htmlFor="price">Цена за единицу (₽)</Label>
              <Input id="price" type="number" placeholder="0.00" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
              Отмена
            </Button>
            <Button onClick={() => setIsAddDialogOpen(false)}>
              <Icon name="Check" size={16} className="mr-2" />
              Добавить товар
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Icon name="Package" className="text-primary" size={24} />
              {selectedProduct?.name}
            </DialogTitle>
          </DialogHeader>
          {selectedProduct && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Артикул</p>
                  <p className="font-mono font-medium text-foreground">{selectedProduct.id}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Категория</p>
                  <p className="font-medium text-foreground">{selectedProduct.category}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Количество</p>
                  <p className="text-xl font-bold text-primary">
                    {selectedProduct.quantity} {selectedProduct.unit}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Статус</p>
                  {getStatusBadge(selectedProduct.status)}
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Склад</p>
                  <div className="flex items-center gap-2">
                    <Icon name="Warehouse" className="text-primary" size={16} />
                    <p className="font-medium text-foreground">{selectedProduct.warehouse}</p>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Цена за единицу</p>
                  <p className="font-medium text-foreground">{selectedProduct.price.toLocaleString()} ₽</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Общая стоимость</p>
                  <p className="text-xl font-bold text-green-600">
                    {(selectedProduct.price * selectedProduct.quantity).toLocaleString()} ₽
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Последнее обновление</p>
                  <p className="font-medium text-foreground">{selectedProduct.lastUpdated}</p>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button className="flex-1">
                  <Icon name="Edit" size={16} className="mr-2" />
                  Редактировать
                </Button>
                <Button variant="outline" className="flex-1">
                  <Icon name="TrendingUp" size={16} className="mr-2" />
                  История движения
                </Button>
                <Button variant="outline" className="flex-1">
                  <Icon name="FileText" size={16} className="mr-2" />
                  Печать этикетки
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default WarehouseSection;
