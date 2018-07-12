task :serve do
  rm_rf site_dir
  sh 'jekyll serve --watch'
end
