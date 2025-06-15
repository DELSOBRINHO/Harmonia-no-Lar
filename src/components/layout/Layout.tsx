import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Home, Heart, CheckSquare, BarChart3, BookOpen, DollarSign, Lightbulb } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-primary-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Heart className="h-8 w-8 mr-2" />
              <span className="text-xl font-bold">Harmonia no Lar</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center px-3 py-2 rounded-md hover:bg-primary-700">
                <Home className="h-4 w-4 mr-1" />
                Início
              </Link>
              <Link to="/rights-duties" className="flex items-center px-3 py-2 rounded-md hover:bg-primary-700">
                <Heart className="h-4 w-4 mr-1" />
                Direitos e Deveres
              </Link>
              <Link to="/checklist" className="flex items-center px-3 py-2 rounded-md hover:bg-primary-700">
                <CheckSquare className="h-4 w-4 mr-1" />
                Checklist
              </Link>
              <Link to="/evaluation" className="flex items-center px-3 py-2 rounded-md hover:bg-primary-700">
                <BarChart3 className="h-4 w-4 mr-1" />
                Avaliação
              </Link>
              <Link to="/meditation" className="flex items-center px-3 py-2 rounded-md hover:bg-primary-700">
                <BookOpen className="h-4 w-4 mr-1" />
                Meditação
              </Link>
              <Link to="/budget" className="flex items-center px-3 py-2 rounded-md hover:bg-primary-700">
                <DollarSign className="h-4 w-4 mr-1" />
                Orçamento Familiar
              </Link>
              <Link to="/tips" className="flex items-center px-3 py-2 rounded-md hover:bg-primary-700">
                <Lightbulb className="h-4 w-4 mr-1" />
                Dicas
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-6 px-4">
        {children}
      </main>
    </div>
  );
}
