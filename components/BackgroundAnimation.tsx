'use client'

export default function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Gradient Blobs */}
      <div className="absolute w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -top-48 -left-48 animate-float" />
      <div className="absolute w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[120px] top-1/2 -right-48 animate-float" style={{ animationDelay: '7s' }} />
      <div className="absolute w-[350px] h-[350px] bg-cyan-500/20 rounded-full blur-[120px] -bottom-48 left-1/3 animate-float" style={{ animationDelay: '14s' }} />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
    </div>
  )
}
