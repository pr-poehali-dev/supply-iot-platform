import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Switch } from '@/components/ui/switch';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const Index = () => {
  const [isDark, setIsDark] = useState(false);
  const [activeModule, setActiveModule] = useState('dashboard');

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const modules = [
    { id: 'dashboard', label: 'Дашборд', icon: 'LayoutDashboard' },
    { id: 'warehouse', label: 'Склад', icon: 'Warehouse' },
    { id: 'sales', label: 'Продажи', icon: 'TrendingUp' },
    { id: 'shipping', label: 'Отгрузка', icon: 'PackageCheck' },
    { id: 'fleet', label: 'Транспорт', icon: 'Truck' },
    { id: 'ai', label: 'ИИ Прогнозы', icon: 'Brain' },
    { id: 'blockchain', label: 'Блокчейн', icon: 'Shield' },
    { id: 'iot', label: 'IoT Мониторинг', icon: 'Radio' },
  ];

  const kpiMetrics = [
    { 
      title: 'Товары на складе', 
      value: '24,847', 
      change: '+12.5%', 
      icon: 'Package', 
      trend: 'up',
      color: 'bg-blue-500'
    },
    { 
      title: 'Активные заказы', 
      value: '1,234', 
      change: '+8.2%', 
      icon: 'ShoppingCart', 
      trend: 'up',
      color: 'bg-green-500'
    },
    { 
      title: 'Транспорт в пути', 
      value: '47', 
      change: '-2.1%', 
      icon: 'Truck', 
      trend: 'down',
      color: 'bg-orange-500'
    },
    { 
      title: 'IoT Устройства', 
      value: '328', 
      change: '+5.0%', 
      icon: 'Cpu', 
      trend: 'up',
      color: 'bg-purple-500'
    },
  ];

  const aiPredictions = [
    { category: 'Электроника', current: 450, predicted: 620, trend: 'up' },
    { category: 'Продукты питания', current: 1200, predicted: 980, trend: 'down' },
    { category: 'Химия', current: 340, predicted: 450, trend: 'up' },
    { category: 'Текстиль', current: 580, predicted: 610, trend: 'up' },
  ];

  const stockMovement = [
    { month: 'Янв', приход: 4000, расход: 2400, остаток: 2400 },
    { month: 'Фев', приход: 3000, расход: 1398, остаток: 3002 },
    { month: 'Мар', приход: 2000, расход: 3800, остаток: 1202 },
    { month: 'Апр', приход: 2780, расход: 3908, остаток: 74 },
    { month: 'Май', приход: 1890, расход: 4800, остаток: -2836 },
    { month: 'Июн', приход: 2390, расход: 3800, остаток: -4246 },
  ];

  const blockchainTransactions = [
    { id: '0x7f8a...3d2c', type: 'Поставка', status: 'verified', time: '2 мин назад' },
    { id: '0x9b2e...5a1f', type: 'Отгрузка', status: 'verified', time: '5 мин назад' },
    { id: '0x4c3d...8e9b', type: 'Возврат', status: 'pending', time: '12 мин назад' },
    { id: '0x1a5f...6c7d', type: 'Инвентаризация', status: 'verified', time: '18 мин назад' },
  ];

  const iotDevices = [
    { name: 'Датчик температуры - Зона А', value: '+4°C', status: 'ok', battery: 87 },
    { name: 'Датчик влажности - Зона Б', value: '45%', status: 'ok', battery: 62 },
    { name: 'Весы - Участок 3', value: '1.2 т', status: 'warning', battery: 23 },
    { name: 'RFID Scanner - Ворота 1', value: 'Активен', status: 'ok', battery: 95 },
  ];

  const fleetStatus = [
    { vehicle: 'ГАЗель А123МР', location: 'Москва → Казань', progress: 67, eta: '2ч 15м' },
    { vehicle: 'КАМАЗ В456СТ', location: 'Склад А → Склад Б', progress: 34, eta: '4ч 30м' },
    { vehicle: 'Мерседес С789УФ', location: 'Санкт-Петербург → Москва', progress: 89, eta: '45м' },
  ];

  const warehouseZones = [
    { zone: 'Зона А', fill: 87, capacity: '2400 м³', items: 12847, status: 'critical' },
    { zone: 'Зона Б', fill: 62, capacity: '1800 м³', items: 8234, status: 'good' },
    { zone: 'Зона В', fill: 45, capacity: '3200 м³', items: 6766, status: 'good' },
  ];

  const recentOrders = [
    { id: '#ORD-2847', client: 'ООО "Техносервис"', items: 24, sum: '₽487,250', status: 'processing' },
    { id: '#ORD-2848', client: 'ИП Иванов', items: 12, sum: '₽125,000', status: 'shipped' },
    { id: '#ORD-2849', client: 'ПАО "МегаСтрой"', items: 156, sum: '₽2,340,000', status: 'pending' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <aside className="fixed left-0 top-0 h-full w-64 bg-card border-r border-border flex flex-col shadow-lg z-10">
        <div className="p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Boxes" className="text-primary-foreground" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">СнабИИ</h1>
              <p className="text-xs text-muted-foreground">AI Logistics Platform</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {modules.map((module) => (
            <button
              key={module.id}
              onClick={() => setActiveModule(module.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                activeModule === module.id
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
              }`}
            >
              <Icon name={module.icon} size={20} />
              <span className="font-medium">{module.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-border">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-muted-foreground">Тёмная тема</span>
            <Switch checked={isDark} onCheckedChange={toggleTheme} />
          </div>
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback className="bg-primary text-primary-foreground">ИВ</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">Иван Волков</p>
              <p className="text-xs text-muted-foreground">Менеджер склада</p>
            </div>
            <Icon name="LogOut" className="text-muted-foreground cursor-pointer hover:text-foreground" size={18} />
          </div>
        </div>
      </aside>

      <main className="ml-64 min-h-screen">
        <header className="bg-card border-b border-border sticky top-0 z-10 shadow-sm">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  {modules.find(m => m.id === activeModule)?.label}
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Управление логистическими операциями в реальном времени
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm">
                  <Icon name="Download" size={16} className="mr-2" />
                  Экспорт
                </Button>
                <Button size="sm">
                  <Icon name="Plus" size={16} className="mr-2" />
                  Создать заказ
                </Button>
              </div>
            </div>
          </div>
        </header>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {kpiMetrics.map((metric, idx) => (
              <Card key={idx} className="relative overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">{metric.title}</p>
                      <p className="text-3xl font-bold text-foreground">{metric.value}</p>
                      <div className="flex items-center gap-1">
                        <Icon 
                          name={metric.trend === 'up' ? 'TrendingUp' : 'TrendingDown'} 
                          size={14} 
                          className={metric.trend === 'up' ? 'text-green-500' : 'text-red-500'} 
                        />
                        <span className={`text-xs font-medium ${metric.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                          {metric.change}
                        </span>
                      </div>
                    </div>
                    <div className={`w-12 h-12 ${metric.color} rounded-lg flex items-center justify-center`}>
                      <Icon name={metric.icon} className="text-white" size={24} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Activity" className="text-primary" size={20} />
                  Движение товаров
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={stockMovement}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="month" className="text-xs" />
                    <YAxis className="text-xs" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }} 
                    />
                    <Legend />
                    <Area type="monotone" dataKey="приход" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                    <Area type="monotone" dataKey="расход" stackId="2" stroke="#ef4444" fill="#ef4444" fillOpacity={0.6} />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Brain" className="text-primary" size={20} />
                  ИИ Прогноз потребности
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={aiPredictions}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="category" className="text-xs" />
                    <YAxis className="text-xs" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }} 
                    />
                    <Legend />
                    <Bar dataKey="current" fill="#94a3b8" name="Текущий" />
                    <Bar dataKey="predicted" fill="#3b82f6" name="Прогноз" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Shield" className="text-primary" size={20} />
                  Блокчейн транзакции
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {blockchainTransactions.map((tx, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${tx.status === 'verified' ? 'bg-green-500' : 'bg-yellow-500'}`} />
                        <div>
                          <p className="text-sm font-medium text-foreground">{tx.type}</p>
                          <p className="text-xs text-muted-foreground font-mono">{tx.id}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant={tx.status === 'verified' ? 'default' : 'secondary'} className="text-xs">
                          {tx.status === 'verified' ? 'Подтверждено' : 'Ожидание'}
                        </Badge>
                        <p className="text-xs text-muted-foreground mt-1">{tx.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Radio" className="text-primary" size={20} />
                  IoT Устройства
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {iotDevices.map((device, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground">{device.name}</p>
                          <p className="text-lg font-bold text-primary mt-1">{device.value}</p>
                        </div>
                        <Badge variant={device.status === 'ok' ? 'default' : 'destructive'} className="text-xs">
                          {device.status === 'ok' ? 'OK' : '⚠️'}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Battery" size={14} className="text-muted-foreground" />
                        <Progress value={device.battery} className="h-1.5 flex-1" />
                        <span className="text-xs text-muted-foreground">{device.battery}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Truck" className="text-primary" size={20} />
                  Транспорт
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {fleetStatus.map((vehicle, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm font-bold text-foreground">{vehicle.vehicle}</p>
                        <span className="text-xs text-muted-foreground">ETA: {vehicle.eta}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">{vehicle.location}</p>
                      <div className="flex items-center gap-2">
                        <Progress value={vehicle.progress} className="h-2 flex-1" />
                        <span className="text-xs font-medium text-foreground">{vehicle.progress}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Warehouse" className="text-primary" size={20} />
                  Заполненность складов
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {warehouseZones.map((zone, idx) => (
                    <div key={idx} className="p-4 rounded-lg border border-border hover:border-primary transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <p className="font-bold text-foreground">{zone.zone}</p>
                          <p className="text-xs text-muted-foreground">{zone.capacity} • {zone.items} товаров</p>
                        </div>
                        <Badge variant={zone.status === 'critical' ? 'destructive' : 'default'}>
                          {zone.fill}%
                        </Badge>
                      </div>
                      <Progress value={zone.fill} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="ShoppingCart" className="text-primary" size={20} />
                  Последние заказы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentOrders.map((order, idx) => (
                    <div key={idx} className="p-4 rounded-lg border border-border hover:border-primary transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-bold text-foreground">{order.id}</p>
                        <Badge variant={
                          order.status === 'shipped' ? 'default' : 
                          order.status === 'processing' ? 'secondary' : 'outline'
                        }>
                          {order.status === 'shipped' ? 'Отправлен' : 
                           order.status === 'processing' ? 'В обработке' : 'Ожидание'}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{order.client}</p>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">{order.items} позиций</span>
                        <span className="font-bold text-primary">{order.sum}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Sparkles" className="text-primary" size={20} />
                Рекомендации ИИ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <Icon name="AlertTriangle" className="text-blue-500 mb-2" size={24} />
                  <h4 className="font-semibold text-foreground mb-1">Низкий запас</h4>
                  <p className="text-sm text-muted-foreground">Категория "Электроника" достигнет минимума через 4 дня. Рекомендуется пополнение.</p>
                </div>
                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                  <Icon name="TrendingUp" className="text-green-500 mb-2" size={24} />
                  <h4 className="font-semibold text-foreground mb-1">Оптимизация маршрута</h4>
                  <p className="text-sm text-muted-foreground">Объединение заказов #2847 и #2851 сократит расходы на доставку на 18%.</p>
                </div>
                <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <Icon name="Zap" className="text-purple-500 mb-2" size={24} />
                  <h4 className="font-semibold text-foreground mb-1">Пиковая загрузка</h4>
                  <p className="text-sm text-muted-foreground">Прогнозируется повышенный спрос в следующую среду. Подготовьте дополнительный персонал.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Index;